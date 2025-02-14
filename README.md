# Task Management System

## Description

A simple and efficient Task Management System built using React.js and Tailwind CSS, designed to help users create, manage, and track their tasks effectively. The system includes role-based authentication, with separate dashboards for administrators and employees.

## Features

- Role-based authentication (Admin & Employee)
- Persistent login using local storage
- Employee and Admin dashboards
- Secure login system with predefined admin credentials
- Responsive UI with Tailwind CSS
- Fast and efficient development using Vite

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Build Tool:** Vite
- **Linting:** ESLint
- **State Management:** React Context API

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/task-management-system.git
   ```
2. Navigate to the project directory:
   ```sh
   cd task-management-system
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Authentication

### Admin Login:
- **Email:** `admin@me.com`
- **Password:** `123`

### Employee Login:
- Employees must log in using their registered email and password.
- Employee credentials are stored in the AuthContext.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build the project
- `npm run lint` – Run ESLint for code quality
- `npm run preview` – Preview the production build

## Usage

- **Login:** Users can log in as either an Admin or an Employee.
- **Admin Dashboard:** Allows managing system-wide settings and user roles.
- **Employee Dashboard:** Displays personalized task information for employees.
- **Logout:** Users can log out to switch accounts.

## Contact

For any queries, reach out to prathampandey1005@gmail.com
