import type React from "react"
import { createContext, useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import type { UpvoteContextType, UpvoteState } from "./UpvoteContextType"

// eslint-disable-next-line react-refresh/only-export-components
export const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined)

export const UpvoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cookies, setCookie] = useCookies(["upvoteState"])
  const [state, setState] = useState<UpvoteState>(cookies.upvoteState || { list1: [], list2: [] })

  useEffect(() => {
    setCookie("upvoteState", state, { path: "/" })
  }, [state, setCookie])

  const addUpvote = (listId: "list1" | "list2") => {
    setState((prevState) => ({
      ...prevState,
      [listId]: [
        ...prevState[listId],
        {
          id: Date.now().toString(),
          selected: listId === "list2",
        },
      ],
    }))
  }

  const toggleUpvote = (listId: "list1" | "list2", id: string) => {
    setState((prevState) => ({
      ...prevState,
      [listId]: prevState[listId].map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)),
    }))
  }

  const moveUpvote = (fromList: "list1" | "list2", toList: "list1" | "list2", id: string) => {
    setState((prevState) => {
      const itemToMove = prevState[fromList].find((item) => item.id === id)
      if (!itemToMove) return prevState

      const updatedItem = { ...itemToMove, selected: toList === "list2" }
      return {
        ...prevState,
        [fromList]: prevState[fromList].filter((item) => item.id !== id),
        [toList]: [...prevState[toList], updatedItem],
      }
    })
  }

  return (
    <UpvoteContext.Provider value={{ state, addUpvote, toggleUpvote, moveUpvote }}>{children}</UpvoteContext.Provider>
  )
}

