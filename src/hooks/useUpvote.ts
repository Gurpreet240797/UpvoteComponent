import { useContext } from "react"
import { UpvoteContext } from "../context/UpvoteContext"

export const useUpvote = () => {
  const context = useContext(UpvoteContext)
  if (!context) {
    throw new Error("useUpvote must be used within an UpvoteProvider")
  }
  return context
}