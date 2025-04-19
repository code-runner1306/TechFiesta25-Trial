# syntax=docker/dockerfile:1

ARG PYTHON_VERSION=3.13.3
FROM python:${PYTHON_VERSION}-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PORT=10000
ENV DJANGO_SUPERUSER_EMAIL=hello@gmail.com
ENV DJANGO_SUPERUSER_PASSWORD=helloworld

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install --no-cache-dir -r requirements.txt

# Create non-privileged user
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    appuser

# Copy application code
COPY . .

# Set permissions
RUN chown -R appuser:appuser /app

# Create entrypoint script
RUN echo '#!/bin/sh\n\
python manage.py collectstatic --noinput\n\
python manage.py makemigrations\n\
python manage.py migrate\n\
python manage.py shell -c "\
from django.contrib.auth import get_user_model; \
User = get_user_model(); \
email = \"$DJANGO_SUPERUSER_EMAIL\"; \
password = \"$DJANGO_SUPERUSER_PASSWORD\"; \
User.objects.filter(email=email).exists() or User.objects.create_superuser(email=email, password=password)"\n\
exec gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT --workers 4 --timeout 120\n\
' > /app/entrypoint.sh && \
    chmod +x /app/entrypoint.sh

USER appuser

EXPOSE $PORT

CMD ["sh", "/app/entrypoint.sh"]