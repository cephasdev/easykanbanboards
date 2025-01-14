# EasyKanbanBoards - project by Dragan Radic

## Overview

This project is a full-stack application with separate frontend and backend components designed to work together seamlessly. The frontend is built with React, TypeScript, Styled Components, React Redux Toolkit, and RTK Query. The backend is an Express.js server that integrates a GraphQL API as middleware and persists data using MongoDB with Mongoose ORM. Secrets are managed using a `.env` file.

## Project Architecture

- **Frontend**:

  - Built using React, TypeScript, Styled Components.
  - State management with React Redux Toolkit.
  - Data fetching and caching using RTK Query.

- **Backend**:
  - Built with Express.js.
  - GraphQL API accessible at `/graphql`, and built using `graphql-http` package.
  - Uses MongoDB as the database.
  - Mongoose ORM for database interactions.
  - Secrets configured through a `.env` file.
  - API secured using `cors` and `helmet` middleware.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/cephasdev/easykanbanboards.git
cd easykanbanboards
```

### Setup Instructions

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following variables:
   ```env
   MONGO_URI=<your_mongodb_connection_string>
   PORT=5000
   ```

#### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application by running:
   ```bash
   npm run start:app
   ```
   This will start both backend- and frontend server in parallel.
   The backend server will run on `http://localhost:4000`.
   The frontend application will run on `http://localhost:5173`.

### Running the Application

- Start the backend server first, as the frontend relies on the backend API for data.
- Open your browser and navigate to `http://localhost:5173` to interact with the application.

## Directory Structure

```
project-root
├── backend
│   ├── src
│   ├── package.json
│   ├── .env
├── frontend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
├── README.md
```
