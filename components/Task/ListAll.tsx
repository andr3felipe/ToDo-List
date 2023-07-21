'use client'

import { Done, NotDone } from "@/components/Task";
import { useTasksContext } from '@/context/TasksContext';
export default function ListAll() {
  const { tasks }  = useTasksContext()
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
        <p className="text-sm text-primary self-end">{doneCount}/{tasks.length} Task finished</p>
      </div>
      <div className="flex flex-col gap-9">
      { doneCount > 0 ? <Done /> : null }
      <NotDone />
      </div>
    </main>
  )
}