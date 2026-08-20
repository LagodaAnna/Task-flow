import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-10 lg:flex-row lg:p-6">
      <Sidebar />
      <div className="flex flex-1 flex-col gap-6">
        <Header />
      </div>
    </div>
  )
}

export default App
