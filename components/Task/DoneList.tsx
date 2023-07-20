import Task from "./Task";

export default function DoneList() {
  return (
    <div className="bg-task-done shadow-purple rounded-lg">
      <Task isDone={true} title="Wake Up!" />
      <Task isDone={true} title="Daily workout" />
    </div>
  )
}