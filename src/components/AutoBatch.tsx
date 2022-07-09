import axios from "axios"
import { useState } from "react"
import { Layout } from "./Layout"

export const AutoBatch = () => {
  const [count, setCount] = useState(0)
  const [fetchCount, setFetchCount] = useState(0)
  const [users, setUsers] = useState([])

  const clickHandler = () => {
    // react18 より前では更新するstateの数だけレンダリングされていた(promiseとかsetTimeout内とか)が、react18からはまとまっていたら1回のレンダリングだけで済むようになった。
    // setCount((count) => count + 1)
    // setFetchCount((fetchCount) => fetchCount + 1)
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data)
      setFetchCount((val) => val + 1)
    })
  }

  console.log("rendered autobatch")

  return (
    <Layout>
      <p className="my-3 text-xl font-bold text-blue-500">Automatic batching</p>
      <p className="my-5">{fetchCount}</p>

      <button className="btn btn-primary bg-indigo-600" onClick={clickHandler}>
        click
      </button>
    </Layout>
  )
}
