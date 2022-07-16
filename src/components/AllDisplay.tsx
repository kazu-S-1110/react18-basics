import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { FetchComment } from "./FetchComment"
import { FetchTasks } from "./FetchTasks"
import { FetchUsers } from "./FetchUsers"
import { Layout } from "./Layout"
import { Spinner } from "./Spinner"

export const AllDisplay = () => {
  return (
    <Layout>
      <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <FetchUsers />
          <FetchTasks />
          <FetchComment />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}
