import { useQueryUsers } from "src/hooks/useQueryUsers"
import { USER } from "src/types/user/user"

export const FetchUsers = () => {
  const { data } = useQueryUsers()

  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">User List</p>
      {data?.map((user: USER) => (
        <p className="my-3 text-sm" key={user.id}>
          {user.username}
        </p>
      ))}
    </div>
  )
}
