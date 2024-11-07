import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Task} from "./Task.tsx";

const queryClient = new QueryClient()


function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Task />
      </QueryClientProvider>
  )
}

export default App
