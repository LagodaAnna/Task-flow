import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Stats from './components/Stats/Stats'
import TaskFilters from './components/TaskFilters/TaskFilters'

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-10 p-5 sm:p-6 lg:flex-row">
      <Sidebar />
      <div className="flex flex-1 flex-col gap-6">
        <Header />
        <main className="flex flex-col gap-6">
          <Stats />
          <TaskFilters />
        </main>
      </div>
    </div>
  )
}

export default App
