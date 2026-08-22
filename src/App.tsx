import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Stats from './components/Stats/Stats'

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-10 p-5 sm:p-6 lg:flex-row">
      <Sidebar />
      <div className="flex flex-1 flex-col gap-6">
        <Header />
        <main>
          <Stats />
        </main>
      </div>
    </div>
  )
}

export default App
