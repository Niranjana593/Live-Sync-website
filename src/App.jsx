import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav.jsx'
import Body from './components/body.jsx'
import Footer from './components/footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    < >
        <div class="absolute top-0 z-[-2]  w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <Nav />
        <Body />
        <Footer />
        </div>
      
    </>
  )
}

export default App
