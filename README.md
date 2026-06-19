# To-Do List App

A simple, responsive to-do list application built with React and Vite. Tasks are saved in the browser's localStorage, so they persist between page reloads.

## Features

Add a task with a name and a due date
Delete individual tasks
Data persists across page reloads via localStorage
Form validation (both fields are required)
Fully responsive design (mobile & desktop)

## Tech Stack

React 19 – component-based UI, useState, useEffect
Vite – fast development server and build tool
CSS – custom styles, responsive with media queries

## Project Structure

todo-list/
├── index.html
├── src/
│ ├── main.jsx # Entry point
│ ├── App.jsx # Root component
│ ├── index.css # Global styles
│ └── components/
│ ├── Todo.jsx # Main todo component (logic + UI)
│ └── Todo.css # Component styles
├── package.json
└── vite.config.js

## Getting Started

Clone the repository:

bash git clone https://github.com/<ismayilovadilber66>/todo-list.git
cd todo-list

## Install dependencies:

bash npm install

## Start the development server:

bash npm run dev

Open http://localhost:5173 in your browser.

## Usage

Type a task name in the Todo name field.
Pick a date in the Todo date field.
Click Add to add the task to the list.
Click Delete on any task to remove it.

Tasks are automatically saved to localStorage and will still be there the next time you open the page.

## Author

Built by Dilber as part of a frontend development learning project.

## License

This project is open source and available under the MIT License.
