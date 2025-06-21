import React from 'react'

export const About = () => {
  return (
    <div>hii
        <h2>About This Project</h2>
  <p>
    This is a <strong>Simple Personal Task Manager</strong> web application built using 
    <strong>React.js</strong> for the frontend and <strong>Firebase Firestore</strong> 
    for real-time database operations. The goal of this project is to allow users to 
    create, manage, and track their daily tasks in an organized way.
  </p>
  <p>
    Users can:
  </p>
  <ul>
    <li>✅ <strong>Add new tasks</strong> with a title and description</li>
    <li>🗑️ <strong>Delete tasks</strong></li>
    <li>📡 Experience <strong>real-time updates</strong> using Firebase’s onSnapshot listener</li>
  </ul>
  <p>
    The app uses:
  </p>
  <ul>
    <li><strong>React Hooks</strong> (<code>useState</code>, <code>useEffect</code>)</li>
    <li><strong>Firebase Firestore</strong> for backend data storage and real-time sync</li>
    <li><strong>React Router DOM</strong> for navigation </li>
    <li>Clean and minimal UI for a better user experience</li>
  </ul>
  <p>
    This project demonstrates how to build a simple CRUD application with real-time 
    database updates and is ideal for beginners exploring full-stack web development 
    with React and Firebase.
  </p>
    </div>
  )
}


