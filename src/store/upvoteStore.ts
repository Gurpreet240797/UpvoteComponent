import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { UpvoteState } from "../context/UpvoteContextType"

type UpvoteStore = {
  state: UpvoteState
  addUpvote: (listId: "list1" | "list2") => void
  toggleUpvote: (listId: "list1" | "list2", id: string) => void
  moveUpvote: (fromList: "list1" | "list2", toList: "list1" | "list2", id: string) => void
}

export const useUpvoteStore = create<UpvoteStore>()(
  persist(
    (set) => ({
      state: { list1: [], list2: [] },
      addUpvote: (listId) =>
        set((store) => ({
          state: {
            ...store.state,
            [listId]: [
              ...store.state[listId],
              {
                id: Date.now().toString(),
                selected: listId === "list2",
              },
            ],
          },
        })),
      toggleUpvote: (listId, id) =>
        set((store) => ({
          state: {
            ...store.state,
            [listId]: store.state[listId].map((item) =>
              item.id === id ? { ...item, selected: !item.selected } : item,
            ),
          },
        })),
      moveUpvote: (fromList, toList, id) =>
        set((store) => {
          const itemToMove = store.state[fromList].find((item) => item.id === id)
          if (!itemToMove) return store

          const updatedItem = { ...itemToMove, selected: toList === "list2" }
          return {
            state: {
              ...store.state,
              [fromList]: store.state[fromList].filter((item) => item.id !== id),
              [toList]: [...store.state[toList], updatedItem],
            },
          }
        }),
    }),
    {
      name: "upvote-storage",
    },
  ),
)

