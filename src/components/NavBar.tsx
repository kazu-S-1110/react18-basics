import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="w-screen bg-gray-800 font-mono">
      <div className="flex h-12 items-center pl-4">
        <div className="flex space-x-1 text-sm">
          <Link to="/" className="navbarLink">
            Home
          </Link>
          <Link to="/autobatch" className="navbarLink">
            Auto-batch
          </Link>
          <Link to="/suspense" className="navbarLink">
            Suspense
          </Link>
          <Link to="/all_display" className="navbarLink">
            All display
          </Link>
          <Link to="/nested_suspense" className="navbarLink">
            Nested-Suspense
          </Link>
          <Link to="/concurrent" className="navbarLink">
            startTransition
          </Link>
        </div>
      </div>
    </nav>
  )
}
