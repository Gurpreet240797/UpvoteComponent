import { UpvoteProvider } from "./context/UpvoteContext"
import UpvoteList from "./components/UpvoteList"
import { useUpvote } from "./hooks/useUpvote"

const AppContent = () => {
  const { toggleUpvote } = useUpvote()

  return (
    <div className="p-8">
      <div className="max-w-2/3 mx-auto space-y-4 border-2 border-gray-300 rounded-2xl p-4">
        <UpvoteList
          listId="list1"
          title="First List"
          className="border-2 border-gray-200 rounded-xl p-6"
          onToggle={toggleUpvote}
        />
        <UpvoteList
          listId="list2"
          title="Second List"
          className="border-2 border-gray-200 rounded-xl p-6"
          onToggle={toggleUpvote}
        />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <UpvoteProvider>
      <AppContent />
    </UpvoteProvider>
  )
}

export default App

