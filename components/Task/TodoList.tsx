import Task from "./Task";

export default function TodoList() {
  return (
    <div className="bg-task-to-do rounded-lg">
      <Task isDone={false} title="Briefing with Lokanaka" />
      <Task isDone={false} title="Pitching with John" />
      <Task isDone={false} title="Design Landing Page" />
      <button className="min-h-[76px] min-w-full rounded-lg bg-task-done text-white shadow-purple mt-5">Create task</button>
    </div>
  )
}