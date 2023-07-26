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
    </div>
  )
}