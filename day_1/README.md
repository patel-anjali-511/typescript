# Day 1 - TypeScript + Express Setup

This repository contains my **Day 1 internship task** for the MERN + TypeScript onboarding program.

## 📌 Objective

- Set up a TypeScript project
- Create a basic Express server
- Configure TypeScript
- Learn Express middleware
- Implement a typed logger middleware

---

## 📂 Project Structure


```text
day_1/
├── src/
│   ├── app.ts
│   └── middleware/
│       └── logger.ts
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── server.ts
└── tsconfig.json
```

---

## 🛠 Technologies Used

- Node.js
- Express.js
- TypeScript
- dotenv
- ts-node
- ts-node-dev

---

## 📚 Concepts Learned

- TypeScript project setup
- Express application structure
- Request & Response types
- NextFunction
- Middleware
- Logger middleware
- Environment variables using `.env`
- TypeScript strict mode

---

## 🚀 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🌐 Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000
```

---

## 📌 API

### GET /

Returns:

```text
Hello World
```

---

## 📖 Middleware

The project includes a custom logger middleware that logs:

- HTTP Method
- Request URL

Example:

```text
GET /
POST /login
```

---

## 🎯 Learning Outcome

By completing this task, I learned how to:

- Build an Express server using TypeScript
- Configure a TypeScript project
- Use Express middleware
- Understand Request, Response, and NextFunction
- Organize a Node.js project structure

---

## 👨‍💻 Author

Anjali Patel