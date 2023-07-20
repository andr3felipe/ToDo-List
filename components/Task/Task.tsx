interface TaskProps {
  isDone: boolean
  title: string
}

export default function Task({ isDone, title }: TaskProps) {
  return (
    <div className="flex gap-5 justify-between items-center min-h-[86px] p-5">
      <input type="checkbox" name="" id="" />
      <div className="flex-1 min-h-[34px]">
        <p className={`font-bold ${isDone ? 'text-white' : 'text-task'}`}>{title}</p>
      </div>
      <button className={`${isDone ? 'text-white' : 'text-black'}`}>{">"}</button>
    </div>
  )
}