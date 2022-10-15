
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Carousel from './components/Carousel'
import Menu from './components/Menu'
import Footer from './components/Footer'

const App = () => {

  return (
    <div>
      <Menu />
      <Carousel />
      <Footer />
    </div>
  )
}

export default App
