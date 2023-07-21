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
  addTask: (task: Task) => void
  taskState: ({ id, isDone }: taskState) => void
  editTask: ({ id, title }: editTask) => void
}

const TasksContext = createContext({} as TasksContextProps)
export const TasksProvider = ({ children }: { children: React.ReactNode }) => {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Wake Up!',
      isDone: true
    },
    {
      id: '2',
      title: 'Daily workout',
      isDone: true,
    },
    {
      id: '3',
      title: 'Briefing with Lokanaka',
      isDone: false,
    },
    {
      id: '4',
      title: 'Pitching with John',
      isDone: false,
    },
    {
      id: '5',
      title: 'Design Landing Page',
      isDone: false,
    },
  ])
  
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

  return (
    <TasksContext.Provider value={{ tasks, addTask, taskState, editTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasksContext = () => useContext(TasksContext)