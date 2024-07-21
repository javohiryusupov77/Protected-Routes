import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import Hamburger from "../home/hamburger.svg";
import Search from "../home/search.svg";
import first from "../home/First.svg"
import second from "../home/second.svg"
import fourt from "../home/fourth.svg"
import calendar from "../home/calendar.svg"




export default function Today() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, done: false }]);
      setTask("");
    }
  };

  const toggleTaskDone = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <div className={styles.part1}>
        <br />
        <div className={styles.hamburger}>
          <h1>Menu</h1>
          <img
            style={{ paddingTop: "0.5rem" }}
            src={Hamburger}
            alt="Hamburger"
          />
        </div>
        <div className={styles.SearchContainer}>
          <img className={styles.search} src={Search} alt="Search" />
          <input
            className={styles.inputType}
            placeholder="Search..."
            type="text"
          />
        </div>
        <h3 style={{ marginLeft: "2rem" }}>Tasks</h3>
        <div className={styles.upcoming}>
          <div className={styles.imagePart}>
            <img src={first} alt="first" />
            <p>Upcoming</p>
          </div>
          <p>15+</p>
        </div>
        <div className={styles.arrowRight}>
          <div className={styles.imagePart}>
            <img src={second} alt="second" />
            <p>Today</p>
          </div>
          <p>8+</p>
        </div>
        <div className={styles.imagePart} style={{ marginLeft: "4rem" }}>
          <img src={calendar} alt="calendar" />
          <p>Calendar</p>
        </div>
        <div style={{marginLeft:"4rem"}} className={styles.imagePart}>
          <img src={fourt} alt="fourt" />
          <p>Sticky wall</p>
        </div>
        <h3 style={{ marginLeft: "2rem" }}>Lists</h3>
        <div style={{ marginLeft: "3.5rem" }}>
          <div className={styles.lists}>
            <span
              style={{ background: "red" }}
              className={styles.colorType}
            ></span>
            <p>work</p>
          </div>
          <div className={styles.lists}>
            <span
              style={{ background: "green" }}
              className={styles.colorType}
            ></span>
            <p>personal</p>
          </div>
          <div className={styles.lists}>
            <span
              style={{ background: "blue" }}
              className={styles.colorType}
            ></span>
            <p>study</p>
          </div>
        </div>
      </div>
      <div className={styles.part2}>
        <h2>Today</h2>
        <div className={styles.todoForm}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            className={styles.inputType}
          />
          <button onClick={addTask} className={styles.addButton}>
            Add
          </button>
        </div>
        <ul className={styles.todoList}>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`${styles.todoItem} ${task.done ? styles.done : ""}`}
            >
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTaskDone(index)}
              />
              <span>{task.text}</span>
              <button
                onClick={() => deleteTask(index)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
