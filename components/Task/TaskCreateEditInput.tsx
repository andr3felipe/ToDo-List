import { Icon } from "@/components";

export default function TaskCreateEditInput() {
  return (
    <main className="text-[18px] mt-[259px] mx-[12px]">
        <h4>Task title</h4>
        <div className="mt-[10px] bg-task-to-do w-full flex px-4 py-[22px] rounded">
          <Icon />
          <label htmlFor="create" className="flex-1 pl-[25px]">
            <input type="text" name="create" id="create" 
              className="w-full bg-transparent placeholder:font-semibold outline-none"
              placeholder="Type here"
            />
          </label>
        </div>
      </main>
  )
}