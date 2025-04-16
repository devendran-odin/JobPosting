import { Toaster } from 'react-hot-toast'
import Navbar from "./Navbar"
import Filter from "./Filter"
import CompanyCard from "./CompanyCard"

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <Navbar/>
      <Filter/>
      <CompanyCard/>
    </>
  )
}

export default App
