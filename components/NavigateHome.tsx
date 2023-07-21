import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Link from "next/link";

interface NavigateBeforeProps {
  title: string[]
}
export default function NavigateBefore({ title }: NavigateBeforeProps) {
  return (
    <header>
        <nav>
          <Link href={`/`} className="flex gap-[6px]">
            <NavigateBeforeIcon />
            <h1 className="text-2xl">{title[0]} <br /> {title[1]}</h1>
            </Link>
        </nav>
      </header>
  )
}