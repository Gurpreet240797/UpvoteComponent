import React from "react"
import { cn } from "../utils/tailwind"

export type ButtonProps = {
  content?: string
  state?: "default" | "selected"
  leadingIcon?: React.ReactElement | string | number | null
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ content, leadingIcon, size = "md", state = "default", className, onClick, ...props }, ref) => {
    const commonClasses = cn(
      "transition duration-200 ease-linear",
      "min-h-9 inline-flex min-w-9 cursor-pointer items-center justify-center gap-2 rounded-lg font-semibold",
      size === "sm" && "text-xs leading-4 py-2 px-[14px]",
      size === "md" && "text-sm leading-5 py-[10px] px-4",
      size === "lg" && "text-base leading-6 py-[10px] px-[18px]",
      size === "xl" && "text-base leading-6 py-3 px-[20px]",
      size === "2xl" && "gap-3 text-lg leading-7 py-4 px-[28px]",
      state === "default" && "bg-[#F4F6F8]",
      state === "selected" && "bg-[#E5E8FD]",
      className,
    )

    const contentElements = (
      <>
        {leadingIcon && (
          <div
            className={cn(
              state === "default" && "text-gray-600",
              state === "selected" && "text-blue-600",
              size === "sm" && "size-4",
              (size === "md" || size === "lg" || size === "xl") && "size-5",
              size === "2xl" && "size-6",
              "align-center content-center justify-center",
            )}
          >
            {leadingIcon}
          </div>
        )}
        {content}
      </>
    )

    return (
      <button ref={ref} {...props} type={props.type || "button"} className={commonClasses} onClick={onClick}>
        {contentElements}
      </button>
    )
  },
)

