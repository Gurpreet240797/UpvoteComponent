import { fireEvent, render } from '@testing-library/react'
import { Button } from "../components/Button";
import { vi } from 'vitest'
import { ArrowUpIcon } from '@heroicons/react/20/solid';

describe("Button", () => {
  /**
   * Testing the Button component with the following test cases:
   * 1. Calls onClick handler when clicked
   * 2. Renders with correct state classes- default or selected
   * 3. Applies custom className
   */

  it("1. Calls onClick handler when clicked", () => {
    const handleClick = vi.fn()
    const { getByRole } = render(<Button onClick={handleClick} leadingIcon={<ArrowUpIcon className="h-5 w-5" />} />)

    const button = getByRole("button")
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("2. Renders with correct state classes", () => {
    const { getByRole, rerender } = render(<Button state="default" leadingIcon={<ArrowUpIcon className="h-5 w-5" />} />)

    let button = getByRole("button")
    expect(button).toHaveClass("bg-[#F4F6F8]")

    rerender(<Button state="selected" leadingIcon={<ArrowUpIcon className="h-5 w-5" />} />)
    button = getByRole("button")
    expect(button).toHaveClass("bg-[#E5E8FD]")
  })
  
  it("3. Applies custom className", () => {
    const { getByRole } = render(<Button className="bg-red-300" leadingIcon={<ArrowUpIcon className="h-5 w-5" />} />)

    const button = getByRole("button")
    expect(button).toHaveClass("bg-red-300")
  })
})