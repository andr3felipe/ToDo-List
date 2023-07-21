'use client'

import { TasksProvider } from "@/context/TasksContext"

export const Providers = ({children}: { children: React.ReactNode }) => {
  return (
    <TasksProvider>
      {children}
    </TasksProvider>
  )
}