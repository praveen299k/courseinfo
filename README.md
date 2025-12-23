# CourseInfo – React Basics Project

A simple React application built as part of a learning assignment to understand
core React concepts such as components, props, lists, and basic data handling.

This project started as a single component and was gradually refactored into
multiple reusable components.

---

## What This Project Does

- Displays multiple courses
- Each course contains multiple parts
- Each part shows its name and number of exercises
- Calculates and displays the total number of exercises per course

---

## Concepts Learned & Practiced

- Creating and structuring React components
- Passing data using props
- Splitting a large component into smaller reusable components
- Rendering lists using the `map` function
- Calculating derived data using `reduce`
- Keeping data in a parent component and passing it down
- Basic project structure using Vite + React
- Using Git & GitHub with meaningful commits

---

## Component Structure

- **App**
  - Holds all course data
  - Renders courses using `map`
- **Course**
  - Represents a single course
- **Header**
  - Displays course name
- **Content**
  - Renders all parts of a course
- **Part**
  - Displays a single part and its exercises
- **Total**
  - Calculates and displays total exercises

---

## Tech Stack

- React
- JavaScript (ES6+)

---

## Purpose of This Project

This is a learning-focused project created to build strong fundamentals in React.
The goal was not UI design, but understanding **component-based thinking** and
**data flow in React applications**.

This project may be extended further as learning continues.

---

## How to Run Locally

```bash
npm install
npm run dev
```
