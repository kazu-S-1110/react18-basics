import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { AllDisplay } from "./components/AllDisplay"
import { AutoBatch } from "./components/AutoBatch"
import { NestedSuspense } from "./components/NestedSuspense"
import { SuspenseDemo } from "./components/SuspenseDemo"
import "./index.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/autobatch" element={<AutoBatch />} />
        <Route path="/suspense" element={<SuspenseDemo />} />
        <Route path="/all_display" element={<AllDisplay />} />
        <Route path="/nested_suspense" element={<NestedSuspense />} />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  // </React.StrictMode>
)
