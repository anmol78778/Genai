# 🤖 AI Multi-Agent Platform (RAG + LangGraph + LangChain)

An enterprise-style AI assistant built using a **microservices architecture** that combines **LangGraph**, **LangChain**, and **Retrieval-Augmented Generation (RAG)** to provide intelligent, context-aware responses.

The platform supports document understanding, conversational AI, coding assistance, and tool-based reasoning while maintaining a scalable backend architecture.

---

# 🚀 Features

- Multi-Agent AI Architecture using LangGraph
- Retrieval-Augmented Generation (RAG)
- Vector Search for contextual document retrieval
- Chat Memory
- Intelligent Agent Routing
- Secure Authentication (JWT + Firebase)
- Redis Caching
- Dockerized Microservices
- REST APIs
- Streaming AI Responses
- File Upload & Document Processing
- Modular and Scalable Architecture

---

# 🏗️ System Architecture

```
                   React Frontend
                          │
                          ▼
                  API Gateway Service
                          │
      ┌──────────────┬──────────────┬──────────────┐
      ▼              ▼              ▼
 Authentication     Chat         AI Agent
    Service        Service       Service
                                      │
               ┌──────────────────────┴────────────────────┐
               ▼                                           ▼
        LangGraph Router                           LangChain
               │
       ┌───────┼────────┐
       ▼       ▼        ▼
    RAG      Coding    General Chat
     │
Vector Database
     │
Relevant Documents
```

---

# 🧠 AI Workflow

```
User Query
      │
      ▼
Frontend
      │
      ▼
Gateway Service
      │
      ▼
Agent Service
      │
      ▼
LangGraph Router
      │
 ┌────┼───────────────┐
 │    │               │
 ▼    ▼               ▼
RAG Coding Agent General Chat
 │
 ▼
Vector Search
 │
 ▼
Relevant Chunks
 │
 ▼
LLM Response
 │
 ▼
Frontend
```


---

# 🛠️ Tech Stack

## Frontend

- React.js
- Redux Toolkit
- Axios
- Firebase Authentication
- React Router

---

## Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication

---

## AI Stack

- LangChain
- LangGraph
- Retrieval-Augmented Generation (RAG)
- Prompt Engineering
- Tool Calling
- Conversation Memory

---

## Database

- MongoDB
- Vector Database (for embeddings)

---

## Caching

- Redis

---

## DevOps

- Docker
- Docker Compose

---

# 🧩 Microservices

## 1. Gateway Service

Responsibilities

- API Gateway
- Request Routing
- Middleware
- Authentication Validation
- Rate Limiting (Optional)
- Service Communication

---

## 2. Authentication Service

Responsibilities

- Firebase Authentication
- JWT Generation
- User Management
- Login / Signup
- Authorization

---

## 3. Chat Service

Responsibilities

- Chat History
- Conversation APIs
- Session Management
- User Conversations

---

## 4. Agent Service

Responsibilities

- LangGraph Workflow
- LangChain Integration
- Tool Selection
- RAG Pipeline
- Prompt Orchestration
- Context Retrieval
- LLM Interaction

---

# 🧠 RAG Pipeline

```
User Question
      │
      ▼
Embedding Generation
      │
      ▼
Vector Search
      │
      ▼
Retrieve Top Documents
      │
      ▼
Context Construction
      │
      ▼
Prompt + Context
      │
      ▼
Large Language Model
      │
      ▼
AI Response
```

---

# 🔄 LangGraph Workflow

```
Start
  │
  ▼
Understand User Intent
  │
  ▼
Select Appropriate Agent
  │
  ├─────────────► Coding Agent
  │
  ├─────────────► RAG Agent
  │
  ├─────────────► Chat Agent
  │
  └─────────────► Tool Calling
        │
        ▼
Generate Response
        │
        ▼
Return Answer
```

---

# 🔐 Authentication Flow

```
Frontend
     │
     ▼
Firebase Login
     │
     ▼
Auth Service
     │
     ▼
JWT Token
     │
     ▼
Protected APIs
```

---

# 📂 API Flow

```
Client
  │
  ▼
Gateway
  │
  ▼
Required Service
  │
  ▼
Business Logic
  │
  ▼
Database / AI
  │
  ▼
Response
```

---

# ⚡ Installation

```bash
git clone <repository>

cd backend

npm install

cd ../frontend

npm install
```

---

# Docker

```bash
docker compose up --build
```

---

# Environment Variables

Backend

```
PORT=

JWT_SECRET=

MONGODB_URI=

REDIS_URL=

OPENAI_API_KEY=

VECTOR_DB_URL=
```

Frontend

```
VITE_API_URL=

VITE_FIREBASE_API_KEY=

VITE_FIREBASE_AUTH_DOMAIN=
```

---

# Interview Highlights

### Designed using Microservices

Instead of building a monolithic backend, the project separates Authentication, Chat, Gateway, and AI Agent into independent services for better scalability and maintainability.

---

### LangGraph for Agent Orchestration

Implemented LangGraph to manage multi-step AI workflows, enabling intelligent routing between different agents such as RAG, coding assistance, and general conversation.

---

### Retrieval-Augmented Generation (RAG)

Integrated a RAG pipeline where user queries are embedded, matched against a vector database, and combined with retrieved context before being passed to the LLM. This reduces hallucinations and improves answer accuracy.

---

### Scalable AI Backend

The AI service is isolated from business logic, making it easy to add new agents, tools, or LLM providers without impacting other services.

---

### Performance Optimizations

- Redis caching
- Stateless JWT authentication
- Shared utilities across services
- Modular folder structure
- Dockerized deployment

---

# Future Improvements

- Multi-modal AI (Images + PDFs)
- Streaming responses using Server-Sent Events/WebSockets
- Agent memory persistence
- Hybrid Search (BM25 + Vector Search)
- Kubernetes Deployment
- CI/CD Pipeline
- Monitoring with Prometheus & Grafana

---

# Key Skills Demonstrated

- Microservices Architecture
- Node.js
- Express.js
- React.js
- LangChain
- LangGraph
- Retrieval-Augmented Generation
- Vector Search
- Redis
- MongoDB
- JWT Authentication
- Firebase Authentication
- REST APIs
- Docker
- AI Agent Design
- Prompt Engineering
- Scalable Backend Development

---
