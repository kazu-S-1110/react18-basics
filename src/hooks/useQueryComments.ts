import axios from "axios"
import { useQuery } from "react-query"
import { delay } from "src/utils/fetchDelay"

const getComments = async () => {
  const { data } = await axios
    .get("https://jsonplaceholder.typicode.com/comments?_limit=3")
    .then(await delay(2000))
  return data
}

export const useQueryComments = () => {
  return useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
    staleTime: Infinity,
  })
}
