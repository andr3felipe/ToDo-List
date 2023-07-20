import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between">
      <div>
      <h3 className="text-primary text-lg font-bold">Thursday</h3>
      <p className="text-xs text-date">09 June 2023</p>
      </div>
      <div>
        <Image src="/profile.png" width={50} height={50} alt="" />
      </div> 
    </header>
  )
}