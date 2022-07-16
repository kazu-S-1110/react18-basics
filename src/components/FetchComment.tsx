import { useQueryComments } from "src/hooks/useQueryComments"
import { COMMENT } from "src/types/comment/comment"

export const FetchComment = () => {
  const { data } = useQueryComments()

  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">Task List</p>
      {data?.map((comment: COMMENT) => (
        <p className="my-3 text-sm" key={comment.id}>
          {comment.name}
        </p>
      ))}
    </div>
  )
}
