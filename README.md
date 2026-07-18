# React Authentication Demo

A simple authentication application built with **React**, **Vite**, **Tailwind CSS**, and a custom authentication API. The project demonstrates reusable authentication components, custom hooks, and session management.

---

## Features

* User Registration
* User Login
* Logout
* Session Management
* Reusable Authentication Components
* Custom `useAuth` Hook
* Tailwind CSS UI
* Responsive Design

---

# Tech Stack

* React
* Vite
* Tailwind CSS
* JavaScript (ES6+)
* Custom Authentication API

---

# Project Structure

```text
src/
│
├── components/
│   └── auth/
│       ├── AuthCard.jsx
│       ├── AuthForm.jsx
│       ├── FormInput.jsx
│       ├── SubmitButton.jsx
│       └── UserProfile.jsx
│
├── hooks/
│   └── useAuth.js
│
├── lib/
│   └── auth-client.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Prerequisites

Before getting started, make sure you have installed:

* Node.js (v18 or later recommended)
* npm or pnpm

Verify installation:

```bash
node -v
npm -v
```

---

# Clone the Repository

```bash
git clone https://github.com/ismailjosim/better-auth-react.git
```

Move into the project directory.

```bash
cd better-auth-client
```

---

# Install Dependencies

Using npm:

```bash
npm install
```

Using pnpm:

```bash
pnpm install
```

---

# Environment Variables

Create a `.env` file in the project root.

```text
.env
```

Add the following variable:

```env
VITE_API_URL=http://localhost:3000
```

Replace the URL with your backend server if it is running somewhere else.

Example:

```env
VITE_API_URL=https://api.example.com
```

---

# Start the Development Server

Using npm:

```bash
npm run dev
```

Using pnpm:

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:5173
```

---

# Backend Requirements

Your backend should expose the following endpoints.

## Register

```http
POST /api/register
```

Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

## Login

```http
POST /api/login
```

Request Body

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

## Session

```http
GET /api/session
```

Returns the currently authenticated user.

---

## Logout

```http
POST /api/logout
```

Destroys the current session.

---

# Authentication Flow

```text
User
   │
   ▼
AuthForm
   │
   ▼
useAuth Hook
   │
   ▼
Authentication API
   │
   ▼
Response
   │
   ▼
UserProfile
```

---

# Reusable Components

## AuthForm

Displays both Login and Register forms.

Props

| Prop     | Description                   |
| -------- | ----------------------------- |
| mode     | login or register             |
| form     | Form state                    |
| loading  | Loading state                 |
| error    | Error message                 |
| onChange | Input change handler          |
| onSubmit | Form submit handler           |
| onToggle | Switch between Login/Register |

---

## UserProfile

Displays the authenticated user's information.

Props

| Prop     | Description     |
| -------- | --------------- |
| user     | Logged in user  |
| onLogout | Logout function |

---

# Custom Hook

`useAuth()` provides:

```javascript
const {
    user,
    loading,
    error,
    login,
    register,
    logout,
    getSession,
} = useAuth();
```

---

# Styling

The project uses Tailwind CSS.

Useful commands:

```bash
npm install tailwindcss @tailwindcss/vite
```

Import Tailwind into your CSS:

```css
@import "tailwindcss";
```

---

# Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| npm run dev     | Start development server |
| npm run build   | Build for production     |
| npm run preview | Preview production build |

---

# Future Improvements

* React Context Authentication Provider
* Protected Routes
* Refresh Token Support
* Forgot Password
* Email Verification
* Social Login (Google, GitHub)
* Form Validation with React Hook Form + Zod
* Toast Notifications
* Dark Mode
* TypeScript Support

---

# License

This project is available under the MIT License.
