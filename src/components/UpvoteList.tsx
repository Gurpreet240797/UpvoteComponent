import type React from "react"
import { useUpvote } from "../hooks/useUpvote"
import { Button } from "./Button"
import { ArrowUpIcon, PlusIcon } from "@heroicons/react/20/solid"
import { cn } from "../utils/tailwind"

type UpvoteListProps = {
  listId: "list1" | "list2"
  title: string
  className?: string
  onToggle: (listId: "list1" | "list2", id: string) => void
}

const UpvoteList: React.FC<UpvoteListProps> = ({ listId, className, onToggle }) => {
  const { state, addUpvote, moveUpvote } = useUpvote()

  const handleUpvoteClick = (id: string) => {
    const otherListId = listId === "list1" ? "list2" : "list1"
    moveUpvote(listId, otherListId, id)
    onToggle(listId, id)
  }

  return (
    <div className="flex items-center w-full gap-3">
      <div className={cn("flex-1 bg-white rounded-2xl p-4 overflow-x-auto", className)}>
        <div className="flex gap-2">
          {state[listId].length === 0 ? (
            <Button className="h-12 bg-white font-normal text-gray-400" content="No Items" />
          ) : (
            state[listId].map((item) => (
              <Button
                key={item.id}
                state={item.selected ? "selected" : "default"}
                leadingIcon={<ArrowUpIcon className="h-5 w-5" />}
                onClick={() => handleUpvoteClick(item.id)}
                className="w-12 h-12 rounded-xl shrink-0"
              />
            ))
          )}
        </div>
      </div>

      <Button
        leadingIcon={<PlusIcon className="h-5 w-5" />}
        onClick={() => addUpvote(listId)}
        className="w-12 h-12 rounded-xl shrink-0 bg-gray-50"
      />
    </div>
  )
}

export default UpvoteList

