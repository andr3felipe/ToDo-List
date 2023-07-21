import { Task } from "@/components/Task";
import { useTasksContext } from "@/context/TasksContext";

export default function Done() {
  const { tasks }  = useTasksContext()

  return (
    <div className="bg-task-done shadow-purple rounded-lg">
     {tasks.map(task => {
        const { id, isDone, title } = task
        if (isDone) {
          return (
            <Task key={id} id={id} isDone={isDone} title={title} />
          )
        }
      })}
    </div>
  )
}