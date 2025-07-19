# DevConnect

**Real‑time collaboration platform for developers: live code editing, documentation generation, error explanation, and task management in one application**

---

## Table of Contents

1. [Overview](#overview)  
2. [Key Features](#key-features)  
3. [Tech Stack](#tech-stack)  
4. [Architecture & Data Flow](#architecture--data-flow)  
5. [Folder Structure](#folder-structure)  
6. [Environment Variables](#environment-variables)  
7. [Setup & Build](#setup--build)  
8. [Running the App](#running-the-app)  
9. [API Endpoints](#api-endpoints)  
10. [Next Steps](#next-steps)  
11. [License](#license)  

---

## Overview

DevConnect is a single‑page web application that lets teams:
- Edit code together in real time  
- Generate documentation from code snippets  
- Ask for error explanations on demand  
- Track project tasks with a Kanban board  
- Manage user access and sessions securely  

---

## Key Features

- **Live Code Editor** powered by Monaco  
- **Code Suggestions** on demand  
- **Documentation Generator** from code  
- **Error Explainer** for runtime or compile messages  
- **Task Board**: create, update, move, delete tasks  
- **Authentication**: register, login, protected routes  

---

## Tech Stack

- **Frontend:** React · Tailwind CSS · React Router · Axios · Monaco Editor  
- **Backend:** Node.js · Express · Mongoose · MongoDB · OpenAI SDK  
- **Development:** ESLint · Prettier · Nodemon  

---

## Architecture & Data Flow

1. **Client**  
   - React SPA handles navigation and UI  
   - Axios communicates with backend endpoints  
   - Monaco Editor component for live code editing  
2. **Server**  
   - Express API serves routes for authentication, AI, docs, issues, tasks  
   - Mongoose models persist users and tasks in MongoDB  
   - OpenAI SDK proxies requests for code suggestions, documentation, and error explanations  
3. **Database**  
   - MongoDB stores user credentials (hashed), project tasks, room states  

---

## Folder Structure
	DevConnect/
	├── client/ # React frontend
	│ ├── public/ # static assets and index.html
	│ ├── src/
	│ │ ├── api/ # axios wrappers (auth, ai, docs, issue, tasks)
	│ │ ├── components/ # reusable UI components (Layout, Navbar, Editor, Docs, Issue, Board)
	│ │ ├── pages/ # page-level components (Dashboard, EditorPage, DocsPage, IssuePage)
	│ │ ├── index.css
	│ │ └── index.js # React entry point
	│ ├── package.json
	│ └── tailwind.config.js
	├── server/ # Express backend
	│ ├── config/ # database connection
	│ ├── controllers/ # business logic for auth, ai, docs, issue, tasks
	│ ├── models/ # Mongoose schemas (User, Task)
	│ ├── routes/ # route definitions
	│ ├── index.js # server entry point
	│ └── package.json
	├── .env.example # sample environment variables
	└── README.md # project overview and instructions

## Environment Variables

Copy `.env.example` to `.env` in the **server** folder and fill in:

Setup & Build
1. Clone Repository
        git clone https://github.com/yourusername/devconnect.git
        cd devconnect

2. Configure Backend
	cd server
	cp .env.example .env
	# edit .env with your values
	npm install

3. Configure Frontend
        cd server
        cp .env.example .env
        # edit .env with your values
        npm install


Running the App
1. Start Backend 
        cd server
        npm run dev

2. Start Frontend
        cd ../client
        npm run dev

3. Open in Browser


API Endpoints
Authentication
POST /api/auth/register – create new user

POST /api/auth/login – user login, returns JWT

AI Services
POST /api/ai/autocomplete – code completion suggestions

POST /api/docs/generate – generate documentation from code

POST /api/issue/explain – explain error message or code snippet

Task Board
GET /api/tasks – list all tasks

POST /api/tasks – create a new task

PUT /api/tasks/:id – update an existing task

DELETE /api/tasks/:id – delete a task
