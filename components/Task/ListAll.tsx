'use client'

import { Done, NotDone } from "@/components/Task";
import { useTasksContext } from '@/context/TasksContext';
import Link from "next/link";
import { useEffect } from 'react'
import { Button } from "../Button";

export default function ListAll() {
  const { tasks, getLocalStorage, setLocalStorage, setTasks }  = useTasksContext()

  useEffect(() => {
   if (tasks.length === 0) {
    const data = getLocalStorage()

    if (data && data.length > 0) {
      setTasks(data)
    }
   }
   
   if (tasks.length) {
    return setLocalStorage()
   }

  }, [tasks, getLocalStorage, setLocalStorage, setTasks])

  const doneCount = tasks.reduce((count, task) => {
    if(task.isDone) {
      count++
    }

    return count
  }, 0)

  return (
    <main className="flex flex-col gap-7">
      <div className="flex justify-between">
        <h1 className="text-2xl">Task <br />List</h1>
        <p className="self-end text-sm text-primary">{doneCount}/{tasks.length} Task finished</p>
      </div>
      <div className="flex flex-col gap-9">
      { doneCount > 0 && <Done /> }
      <div>
      <NotDone />
      <Link href={`/create`} aria-label="Create task">
        <Button spacing="home">
          Create task
        </Button>
      </Link>      
      </div>
      </div>
    </main>
  )
}