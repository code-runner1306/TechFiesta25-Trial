# syntax=docker/dockerfile:1

ARG PYTHON_VERSION=3.13.3
FROM python:${PYTHON_VERSION}-slim AS base

# Prevents Python from writing pyc files.
ENV PYTHONDONTWRITEBYTECODE=1

# Keeps Python from buffering stdout and stderr
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Create a non-privileged user
ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    appuser

# First try to use bind mount for requirements.txt, fall back to copying if not found
# RUN --mount=type=cache,target=/root/.cache/pip \
#     --mount=type=bind,source=requirements.txt,target=requirements.txt,readonly \
#     (python -m pip install -r requirements.txt || \
#      (echo "requirements.txt not found in bind mount, will copy it" && \
#       cp /app/requirements.txt . && \
#       python -m pip install -r requirements.txt))

# Alternative approach that always copies requirements.txt first
COPY requirements.txt .
RUN --mount=type=cache,target=/root/.cache/pip \
    python -m pip install -r requirements.txt

# Switch to the non-privileged user
USER appuser

# Copy the source code into the container.
COPY . .

# Expose the port
EXPOSE 8000

# Run the application
CMD gunicorn 'backend.wsgi' --bind=0.0.0.0:8000