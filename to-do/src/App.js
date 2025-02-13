import './App.css';
import { useState } from 'react'
import { Task } from './task.js'

function App() {
  // Todo array
  const [todoList, setTodoList] = useState([]);
  // Get task value
  const [newTask, setNewTask] = useState("");


  const handleChange = (event) => {
    // const taskValue =
    setNewTask(event.target.value);

  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }
    // Copia o todoList e add o newTask no final do novo array taskTodos.
    setTodoList([...todoList, task]);

  };

  const deleteTask = (id) => {
    // Ver se a task é igual, se sim não retonar ela para a variável
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  const completeTask = (id) => {
    
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          console.log(task.id);
          
          return { ...task, completed: true }
          // Está usando o despred, pegando apenas o isCompleted e modificando
        } else {
          return task;
        }
      })
    )
  }


  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <Task taskName={task.taskName}
            id={task.id} 
            deleteTask={deleteTask}
            completed={task.completed}
            completeTask={completeTask} />
        })}
      </div>
    </div>
  );
}

export default App;
