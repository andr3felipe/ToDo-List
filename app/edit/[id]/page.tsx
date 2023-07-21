'use client'

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { TaskIcon, NavigateHome } from "@/components";
import { useTasksContext } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TrashIcon } from '@/components/TrashIcon';

export default function Edit({ params }: any) {
  const { editTask, deleteTask } = useTasksContext()
  const router = useRouter()
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm()

  const id = params.id

  const handleEditTask: SubmitHandler<FieldValues> = (edit) => {
    const { edit: title } = edit

    editTask({id, title})
    
    router.push('/')
  }

  return (
    <div className="p-[30px] pl-[18px] max-w-7xl mx-auto">
      <div className='flex items-center justify-between'>
      <NavigateHome title={['Edit', 'Task']} />
      <button type='button' onClick={() => {
        deleteTask(id)
        router.push('/')
      }}>
        <TrashIcon />
      </button>
      </div>
      <main className="text-[18px] mt-[259px] mx-[12px]">
        <h4>Task title</h4>
        <form onSubmit={handleSubmit(handleEditTask)} className="flex flex-col">
          <div className="mt-[10px] bg-task-to-do w-full flex px-4 py-[22px] rounded">
            <TaskIcon />
            <label htmlFor="edit" className="flex-1 pl-[25px]">
              <input
                autoComplete='off'
                className="w-full bg-transparent placeholder:font-semibold outline-none"
                placeholder="Type here"
                {...register("edit", { required: true })}
              />
            </label>
          </div>
          {errors.edit && <span className="text-red-500 font-600 mx-auto text-xs">This field is required</span>}
          <button 
            disabled={ isSubmitSuccessful || isSubmitting }
            type="submit"
            className={`min-h-[76px] min-w-full rounded-lg mt-[225px] bg-task-done text-white shadow-purple`}>
            Edit Task
          </button>
        </form>
      </main>
  </div>
  )
}