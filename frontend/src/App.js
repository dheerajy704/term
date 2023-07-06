import { useState, useEffect } from "react";
import TodoList from "./Components/TodoList";
import axios from "axios";
import TodoForm from "./Components/TodoForm";
import { toast } from "react-toastify";

export const URL = "http://localhost:8000";

function App() {
  const [todos, setTodos] = useState();
  const [formData, setFormData] = useState({ name: "", completed: false });
  const { name } = formData;
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState();

  const getTodos = async () => {
    const { data } = await axios.get(`${URL}/api/tasks`);
    setTodos(data);
  };

  //Toast success message
  const success =(message)=>{
    return toast.success(message)
  }

  //Toast error message
  const toastError = (error) =>{
    return toast.error(error.message)
  }

  const handleCancel = ()=>{
    setIsEditing(false)
  setFormData({name:'', completed:false})
  }

  useEffect(() => {
    getTodos();
  }, []);
  //Edit and update post 
  const updateTask = async()=>{
    try {
      await axios.put(`${URL}/api/tasks/${editId}`, formData)
      getTodos()
      setIsEditing(false)
      setFormData({name:"", completed:false})
      success('Updated Todo sucessfully')
    } catch (error) {
      toastError(error)
    }
  }

  //Function to get input from form
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    setFormData({ ...formData, [name]: value });
  };

// Function to add a Task
  const addTask = async (e) => {
    e.preventDefault();
    try {
      if(formData.name !== ""){
          const { data } = await axios.post(`${URL}/api/tasks`, formData);
      setTodos([...todos, data]);
      success('"Todo added sucessfully"')
      }else{
        toast.error('Add a task')
      }
    
    } catch (error) {
      toastError(error)
    }
  };


//Completed toggle function
  async function handleToggle(task) {
    try {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === task._id ? { ...todo, completed: !todo.completed } : todo
        )
      );
      const newFormData = {
        name: task.name,
        completed: !task.completed,
      };
      await axios.put(`${URL}/api/tasks/${task._id}`, newFormData);
      success('Task updated sucessfully')
    } catch (error) { toastError(error) }
  }
//Delete function


  async function handleDelete(_id) {
    try {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== _id));
      await axios.delete(`${URL}/api/tasks/${_id}`);
      toast.success("Task deleted sucessfully");
    } catch (error) {
      toastError(error)
    }
  }

// function for getting edit task data 
  const handleEdit = (task) => {
    setFormData({ name: task.name, completed: false });
    setEditId(task._id)
    setIsEditing(true)
  };

  return (
    <div className="app">
      <h1>My Todo App</h1>
      <TodoForm name={name} handleChange={handleChange} addTask={addTask} isEditing={isEditing} updateTask={updateTask} handleCancel={handleCancel} />
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
