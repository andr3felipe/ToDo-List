import { useTasksContext } from '@/context/TasksContext';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';

interface TaskProps {
  isDone: boolean
  title: string
  id: string
}

export default function Task({ isDone, title, id }: TaskProps) {
  const { taskState } = useTasksContext()

  return (
    <div className="flex gap-5 justify-between items-center min-h-[86px] p-5">
      <Checkbox 
        onClick={() => taskState({ id, isDone })}
        checked={isDone}
        sx={{'&.Mui-checked': {
          color: 'white'      
        }, color: `${isDone ? 'white' : '#bfbfbf'}` }}/>

      <div className="flex-1 min-h-[34px]">
        <p className={`${isDone ? 'text-white' : 'text-task'} break-all`}>{title}</p>
      </div>
      <Link href={`/edit/${id}`}>
      <button className={`${isDone ? 'text-white' : 'text-black'}`}>
        <NavigateNextIcon />
      </button>
      </Link>
    </div>
  )
}