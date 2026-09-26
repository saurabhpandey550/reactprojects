import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navebar from './components/Navebar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navebar/>
        <Home/>

      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navebar/>
        <Paste/>


      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navebar/>
        <ViewPaste/>

      </div>
    },
  ]
)

function App() {
  

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
