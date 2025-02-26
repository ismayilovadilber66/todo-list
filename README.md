# To-Do List Web Application
![Alt text] (https://github.com/ismayilovadilber66/todo-list/blob/be9b264543573ffa7371ab692daddae0cc6ccf99/todo-list.png)
## Overview

The To-Do List Web Application is a simple yet efficient task management tool built using HTML, CSS, and JavaScript. It allows users to create, manage, and delete tasks in an intuitive and interactive interface. This project demonstrates essential front-end development skills, including DOM manipulation, event handling, and local storage management.

Features

Add Tasks: Users can add new tasks by typing in the input field and pressing the add button.

Mark Tasks as Completed: Clicking on a task marks it as completed, visually distinguishing it from pending tasks.

Delete Tasks: Users can remove individual tasks from the list.

Persistent Data: Tasks are stored in Local Storage, ensuring they remain available even after the page is reloaded.

Responsive Design: The application adapts to different screen sizes for optimal usability.

Technologies Used

HTML: Provides the structure of the application, including the input field, button, and task list container.

CSS: Adds styling to the UI, making the application visually appealing and responsive.

JavaScript: Implements the logic for task management, event handling, and data persistence.

Implementation Details

1. Adding Tasks

The user enters a task in the input field and clicks the Add button.

JavaScript listens for a button click or an "Enter" key press event.

A new list item (li) is created dynamically using the DOM API and appended to the task list.

Each task contains a text node and action buttons (complete/delete).

2. Marking Tasks as Completed

Each task item includes an event listener that toggles a CSS class (e.g., completed) when clicked.

This class applies a visual change, such as strikethrough text, indicating the task's completion.

3. Deleting Tasks

Each task has a delete button, which, when clicked, removes the corresponding list item from the DOM.

The event is captured using addEventListener on dynamically created elements.

4. Data Persistence with Local Storage

Tasks are stored in the browser’s Local Storage to persist data across page reloads.

When a task is added, it is saved in Local Storage using localStorage.setItem().

On page load, the script retrieves saved tasks from Local Storage and populates the list.

How to Run the Project

Download or clone the repository.

Open index.html in a web browser.

Start adding, completing, and deleting tasks!

Future Enhancements

Task Editing: Allow users to edit existing tasks.

Category Tags: Users can organize tasks with categories.

Dark Mode: An option to switch between light and dark themes.

Due Dates & Reminders: Set deadlines and notifications for tasks.

Conclusion

This project showcases fundamental front-end development concepts while providing a practical and user-friendly task management tool. The implementation of DOM manipulation, event handling, and Local Storage makes it a valuable learning experience for JavaScript developers.
