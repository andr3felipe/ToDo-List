"use client"
import { createContext, useContext, useState } from 'react';

export interface Task {
  id: string
  title: string
  isDone: boolean
}

interface taskState {
  id: string
  isDone: boolean
}

interface editTask {
  id: string
  title: string
}

interface TasksContextProps {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  addTask: (task: Task) => void
  taskState: ({ id, isDone }: taskState) => void
  editTask: ({ id, title }: editTask) => void
  deleteTask: (id: string) => void
  getLocalStorage: () => Task[] | null
  setLocalStorage: () => void
}

const TasksContext = createContext({} as TasksContextProps)
export const TasksProvider = ({ children }: { children: React.ReactNode }) => {

  const [tasks, setTasks] = useState<Task[]>([])
  
  function addTask(task: Task) {
    setTasks(state => [...state, task])
  }

  function taskState({ id, isDone }: taskState) {
    setTasks((state) => state.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !isDone }
      } else {
        return task
      }
    }))
  }

  function editTask({ id, title }: editTask) {
    setTasks(state => state.map(task => {
      if (task.id === id) {
        return { ...task, title }
      }

      return task
    }))
  }

  function deleteTask(id: string) {
    setTasks(state => state.filter(task => task.id !== id))

    if (tasks.length === 1) {
      window.localStorage.removeItem('@todo-1.0.0')
    }
  }

  function getLocalStorage() {
    const data = window.localStorage.getItem('@todo-1.0.0')
  
    if (data) {
      const parsed = JSON.parse(data)

      return parsed
    }

    return null
  }

  function setLocalStorage() {
    window.localStorage.setItem('@todo-1.0.0', JSON.stringify(tasks))
  }

  return (
    <TasksContext.Provider 
    value={{ tasks, addTask, taskState, editTask, 
    deleteTask, getLocalStorage, setLocalStorage, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasksContext = () => useContext(TasksContext)