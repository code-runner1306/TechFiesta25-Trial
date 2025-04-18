# syntax=docker/dockerfile:1

ARG PYTHON_VERSION=3.13.3
FROM python:${PYTHON_VERSION}-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install system dependencies first (if needed)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first to leverage Docker cache
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

USER appuser

EXPOSE 8000

# Increase timeout and use 2 workers
CMD ["sh", "-c", "exec gunicorn backend.wsgi --bind=0.0.0.0:$PORT --workers=2 --timeout=120"]