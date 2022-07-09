import { BadgeCheckIcon } from "@heroicons/react/solid"
import { useState } from "react"
import "./App.css"
import { Layout } from "./components/Layout"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
        <p className="my-5 text-xl font-bold">React18 basic lesson</p>
        <BadgeCheckIcon className="h-12 w-12 text-red-500" />
      </Layout>
    </div>
  )
}

export default App
