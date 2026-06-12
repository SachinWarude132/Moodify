import { RouterProvider } from 'react-router'
import{router} from "../src/routes"
 import { ContextProvider } from './features/auth/auth.context'
 import "./features/shared/styles/global.scss"
import { SongContextProvider } from './features/home/song.context'
function App() {
 

  return (
  <>
<ContextProvider>
    
  <SongContextProvider>
<RouterProvider router={router}/>
  </SongContextProvider>
  
</ContextProvider>

  </>
  )
}

export default App
