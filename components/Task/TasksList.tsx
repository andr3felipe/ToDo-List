import { DoneList, TodoList } from "./index";

export default function TasksList() {
  return (
    <main className="flex flex-col gap-7">
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold">Task List</h1>
      <p className="text-sm text-primary self-end font-bold">2/10 Task finished</p>
    </div>
      <div className="flex flex-col gap-9">
      <DoneList />
      <TodoList />
      </div>
    </main>
  )
}