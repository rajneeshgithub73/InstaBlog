
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
