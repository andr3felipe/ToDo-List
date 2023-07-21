import { ListAll } from "@/components/Task";
import { Header } from "@/components";

export default function Home() {
  return (
    <div className='p-[2rem] max-w-7xl mx-auto'>
      <div className='flex flex-col gap-[2.1875rem]'>
      <Header />
      <ListAll />
      </div>
    </div>
  )
}
