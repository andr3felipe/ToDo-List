import Link from "next/link";
import { Task } from "@/components/Task";
import { useTasksContext } from "@/context/TasksContext";

export default function NotDone() {
  const { tasks }  = useTasksContext()

  return (
    <div className="rounded-lg bg-task-to-do">
      {tasks.map(task => {
        const { id, isDone, title } = task
        if (!isDone) {
          return (
            <Task key={id} id={id} isDone={isDone} title={title} />
          )
        }
      })}
      <Link href={`/create`} aria-label="Create task">
        <button className="min-h-[76px] min-w-full rounded-lg bg-task-done text-white shadow-purple mt-5"
      >Create task</button>
      </Link>      
    </div>
  )
}