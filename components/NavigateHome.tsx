import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Link from "next/link";

interface NavigateBeforeProps {
  children: React.ReactNode
}
export default function NavigateHome({ children }: NavigateBeforeProps) {
  return (
    <header>
        <nav>
          <Link href={`/`} className="flex gap-[6px]">
            <NavigateBeforeIcon />
            <h1 className="text-2xl">{children}</h1>
            </Link>
        </nav>
      </header>
  )
}