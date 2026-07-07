# User Management System

A full-stack web application built to learn **React, Django, PostgreSQL, Docker, Nginx, and Kubernetes** by developing and deploying a real-world CRUD application.

The project starts with local development using PostgreSQL installed on the host machine, then progresses to Docker containerization, Docker Compose orchestration, and finally deployment to Kubernetes.

---

# Project Goals

The purpose of this project is to learn:

- React frontend development
- Django REST API development
- PostgreSQL database integration
- RESTful API design
- Docker containerization
- Docker Compose orchestration
- Nginx reverse proxy configuration
- Kubernetes deployments and services
- Persistent Volumes (PV) and Persistent Volume Claims (PVC)
- Ingress configuration
- Production-style application architecture

---

# Application Features

## Frontend

- Responsive user interface
- Navigation bar
- Footer
- User registration form
- Display list of all users
- Create User
- Read Users
- Update User
- Delete User
- Client-side form validation
- Axios integration with backend API

---

## Backend

Built with Django and Django REST Framework.

Features include:

- REST API
- CRUD operations
- Model validation
- PostgreSQL integration
- JSON responses
- CORS support

---

## Database

PostgreSQL

User table:

| Field      | Type      |
| ---------- | --------- |
| id         | Integer   |
| name       | String    |
| email      | String    |
| created_at | Timestamp |

---

# REST API

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | /api/users/      | Get all users |
| GET    | /api/users/{id}/ | Get one user  |
| POST   | /api/users/      | Create user   |
| PUT    | /api/users/{id}/ | Update user   |
| DELETE | /api/users/{id}/ | Delete user   |

---

# Technology Stack

## Frontend

- React
- Vite
- React Router
- Axios
- Tailwind CSS

## Backend

- Python
- Django
- Django REST Framework

## Database

- PostgreSQL

## DevOps

- Docker
- Docker Compose
- Nginx

## Container Orchestration

- Kubernetes

---

# Project Structure

```
user-management/
│
├── frontend/
│
├── backend/
│
├── nginx/
│
├── docker-compose.yml
│
├── README.md
│
└── .gitignore
```

---

# Development Roadmap

## Phase 1 — Frontend

- [ ] Create React project
- [ ] Install dependencies
- [ ] Configure Tailwind CSS
- [ ] Build Navbar
- [ ] Build Footer
- [ ] Build User Form
- [ ] Build User List
- [ ] Configure Axios

---

## Phase 2 — Backend

- [ ] Create Django project
- [ ] Create Django app
- [ ] Configure PostgreSQL
- [ ] Create User model
- [ ] Create Serializer
- [ ] Create ViewSet
- [ ] Configure URLs
- [ ] Test API with Postman

---

## Phase 3 — Integration

- [ ] Connect React to Django
- [ ] Display users
- [ ] Create user
- [ ] Edit user
- [ ] Delete user
- [ ] Handle loading states
- [ ] Handle API errors

---

## Phase 4 — Docker

- [ ] Dockerize React
- [ ] Dockerize Django
- [ ] Dockerize PostgreSQL
- [ ] Configure Docker networking
- [ ] Configure Docker Compose

---

## Phase 5 — Nginx

- [ ] Configure reverse proxy
- [ ] Route frontend requests
- [ ] Route backend API requests
- [ ] Production build

---

## Phase 6 — Kubernetes

- [ ] Create Namespace
- [ ] Deploy React
- [ ] Deploy Django
- [ ] Deploy PostgreSQL
- [ ] Configure Services
- [ ] Configure Persistent Volume
- [ ] Configure Persistent Volume Claim
- [ ] Configure Ingress
- [ ] Scale Deployments

---

# System Architecture

## Local Development

```
Browser
    │
    ▼
React (localhost:5173)
    │
HTTP
    ▼
Django (localhost:8000)
    │
Django ORM
    ▼
PostgreSQL
```

---

## Docker Architecture

```
                Browser
                    │
                    ▼
             Nginx Container
                    │
      ┌─────────────┴─────────────┐
      ▼                           ▼
React Container            Django Container
                                   │
                                   ▼
                         PostgreSQL Container
```

---

## Kubernetes Architecture

```
Browser
    │
    ▼
Ingress
    │
    ▼
React Service
    │
React Pods
    │
──────────────
Backend Service
    │
Django Pods
    │
Persistent Volume Claim
    │
PostgreSQL Pod
```

---

# Learning Objectives

By completing this project, you will gain practical experience with:

- Component-based frontend development
- RESTful API design
- Database modeling
- Django ORM
- PostgreSQL
- Docker images
- Docker containers
- Docker Compose
- Docker networking
- Nginx reverse proxy
- Kubernetes Deployments
- Kubernetes Services
- Persistent Volumes
- Persistent Volume Claims
- Ingress
- Scaling applications
- Production deployment workflow

---

# Future Improvements

- Authentication
- JWT tokens
- User login
- User registration
- Pagination
- Search
- Sorting
- Role-based authorization
- Docker image optimization
- CI/CD pipeline
- HTTPS
- Monitoring
- Logging
- Redis caching

---

# License

This project is intended for educational purposes and hands-on learning.
