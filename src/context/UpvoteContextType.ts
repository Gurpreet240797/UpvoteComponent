export type UpvoteItem = {
  id: string
  selected: boolean
}

export type UpvoteState = {
  list1: UpvoteItem[]
  list2: UpvoteItem[]
}

export type UpvoteContextType = {
  state: UpvoteState
  addUpvote: (listId: "list1" | "list2") => void
  toggleUpvote: (listId: "list1" | "list2", id: string) => void
  moveUpvote: (fromList: "list1" | "list2", toList: "list1" | "list2", id: string) => void
}

