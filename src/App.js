
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, {useState,useEffect} from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { db } from './firebase';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,

} from 'firebase/firestore';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        desc: doc.data().desc,
        isCompleted: doc.data().isCompleted
      })));
    });
    return () => unsubscribe();
  }, []);
 


const addTodo = async (title, desc) => {
  try {
    await addDoc(collection(db, "tasks"), {
      title,
      desc,
      isCompleted: false
    });
    console.log(" Task added successfully!");
  } catch (err) {
    console.error("Error adding task:", err);
  }
};

 const onDelete = async (todo) => {
  try {
    await deleteDoc(doc(db, "tasks", todo.id));
    console.log(" Task deleted successfully!");
  } catch (err) {
    console.error("Error deleting task:", err);
  }
};

  return (
    <Router>
      <Header title="Task Manager" searchBar={true} />
      <Routes>
        <Route exact path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
