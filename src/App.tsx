import { UpvoteProvider } from "./context/UpvoteContext"
import UpvoteList from "./components/UpvoteList"
import { useUpvote } from "./hooks/useUpvote"
import ZustandUpvoteList from "./components/ZustandUpvoteList"

const AppContent = () => {
  const { toggleUpvote } = useUpvote()

  return (
    <div className="p-8 space-y-8"> 
      <div className="max-w-2/3 mx-auto space-y-4 border-2 border-gray-300 rounded-2xl p-4">
        <h2 className="text-xl font-bold mt-8 mb-4">Using Store(Zustand)</h2>
        <ZustandUpvoteList
          listId="list1"
          className="border-2 border-gray-200 rounded-xl p-6"
        />
        <ZustandUpvoteList
          listId="list2"
          className="border-2 border-gray-200 rounded-xl p-6"
        />
      </div>

      <div className="max-w-2/3 mx-auto space-y-4 border-2 border-gray-300 rounded-2xl p-4">
        <h2 className="text-xl font-bold mt-8 mb-4">Using Cookies</h2>
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

