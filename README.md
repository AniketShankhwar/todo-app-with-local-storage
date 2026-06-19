# Todo App with Local Storage

A clean, simple and responsive **React Todo App** built with **Vite**, **Context API**, **Tailwind CSS**, and **localStorage**.  
It lets you add, edit, delete, and mark tasks as completed while keeping your data saved even after refreshing the page.

---

## ✨ Features

- Add new todos instantly
- Edit existing todos inline
- Mark todos as complete/incomplete
- Delete todos easily
- Persistent storage using `localStorage`
- Clean, responsive UI
- Context API for simple state management

---

## 🚀 Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **Context API**
- **localStorage**
- **ESLint**

---

## 📁 Project Structure

```bash
todo-app-with-local-storage/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── index.js
    │   ├── TodoForm.jsx
    │   └── TodoItem.jsx
    └── context/
        ├── index.js
        └── TodoContext.js
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AniketShankhwar/todo-app-with-local-storage.git
cd todo-app-with-local-storage
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## 💡 How It Works

- **Todo data** is stored in React state.
- **Context API** shares todo actions across components.
- **localStorage** saves the todos in the browser.
- On refresh, the app loads saved todos automatically.

---

## 🧩 Key Components

### `TodoForm`
Handles adding new tasks through a simple input form.

### `TodoItem`
Displays each todo with options to complete, edit, and delete.

### `TodoContext`
Provides shared todo actions and state to the app.

### `App.jsx`
Manages the main todo state and handles localStorage syncing.

---

## 📌 Available Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## 🎯 What I Learned

This project helped me practice:

- React state management
- Context API usage
- Component reusability
- CRUD operations in React
- Persisting data with `localStorage`
- Building a responsive UI with Tailwind CSS

---

## 🔮 Future Improvements

- Add due dates and priority labels
- Add filters for all / active / completed todos
- Add drag-and-drop sorting
- Add dark mode
- Sync todos with a backend database

---

## 👨‍💻 Author

**Aniket Shankhwar**  
Built as a practice project to strengthen React fundamentals and state management.

---

## 📄 License

This project is for learning and personal use.
