import Header from '@/components/Header'
import { TasksList } from '@/components/Task'

export default function Home() {
  return (
    <div className='p-[2rem] max-w-7xl mx-auto'>
      <div className='flex flex-col gap-[2.1875rem]'>
      <Header />
      <TasksList />
      </div>
    </div>
  )
}
