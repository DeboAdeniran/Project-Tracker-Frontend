Project Tracker

A Project Management Web App built with React, Vite, and Axios,
allowing users to CRUD operations(create project, read projects,update status and delete projects) efficiently.

How to Run the App Locally

Prerequisites
1.)Node.js (v18 or later)
2.)npm (comes with Node.js)
3.)Git
4.)VS Code (or any preferred code editor)

<!------------------------- Installation Steps--------------------- -->

STEP 1: Getting the Source Code

1: Create a New Folder
Open File Explorer (Windows) or Finder (Mac).

Create a new folder (e.g., project-tracker).

Open VS Code and select File → Open Folder, then choose the newly created folder.

2: Open the Terminal
Windows/Linux: Press Ctrl + J
Mac: Press Cmd + J

3: Clone the Repository
Once the terminal is open, type the following command:
COMMAND: git clone https://github.com/DeboAdeniran/Project-Tracker-Frontend .
(The . at the end ensures the repository is cloned directly into the opened folder.)

4: Navigate into the Project (If Needed)
If you didn’t use the ., the project might be inside another folder. Navigate into it using:
COMMAND: cd project-tracker-frontend

STEP 2: Installing Dependencies

Run the following command inside the project folder(terminal):
npm install

STEP 3: Configuring Environment Variables
1: Rename .env.example to .env
2: Add the following environment variables inside the .env file:
(Don't change anything inside the .env)

STEP 4: Running the Development Server
Ensure the backend is running successfully
then type in this command:
npm run dev
Then, open http://localhost:5173/ in your browser.

<!------------------- Architectural Overview --------------------------->

📁 Folder Structure

project-tracker/
│-- src/  
│ ├── components/ # Reusable UI components (buttons, modals, etc.)  
│ ├── hooks/ # Custom React hooks for state management  
│ ├── pages/ # Page components (Dashboard, Not Found)  
│ ├── services/ # API calls using Axios  
│ ├── App.jsx # Main App component  
│ ├── main.jsx # Entry point (ReactDOM)  
│-- public/ # Static assets  
│-- index.css # Global styles  
│-- vite.config.js # Vite configuration  
│-- .env # Environment variables  
│-- package.json # Dependencies & scripts  
│-- README.md # Project documentation

This structured approach ensures separation of concerns (SoC), making the codebase maintainable and scalable.

<!--------------------------- Libraries Used ------------------------>

Core Dependencies

React 19 – Component-based UI development.
Vite – Fast build tool for development.
React Router – Client-side navigation.
Axios – Handles API requests.
Context API – State management for project data.

Development Dependencies

ESLint – Enforces coding standards.
@vitejs/plugin-react-swc – Optimized React compiler for performance.
vite-plugin-svgr – Imports SVGs as React components.

<!---------------------- Code Design & Best Practices -------------------->

This project adheres to SOLID principles for maintainability and scalability:

Single Responsibility Principle (SRP) – Each module (components, hooks, services) has a well-defined responsibility.
Open/Closed Principle (OCP) – Supports extension without modifying existing code.
Liskov Substitution Principle (LSP) – Components are structured for easy reuse.
