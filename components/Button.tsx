import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"


const button = tv({
  base: 'min-h-[76px] min-w-full rounded-lg bg-task-done text-white shadow-purple disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    spacing: {
      default: 'mt-[225px]',
      home: 'mt-0'
    }
  },
  defaultVariants: {
    spacing: 'default'
  }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button> & {
 children: React.ReactNode
}
export function Button({ children, spacing, ...props }: ButtonProps) {
  return (
    <button 
    type="submit"
    className={button({spacing})}
    {...props}
    >
    {children}
  </button>
  )
}