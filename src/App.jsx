
// import Home from './Component/Elements/Home'

import './App.css'
import Header from './Component/Header'
import Mains from './Component/Mains'
import Footer from './Component/Footer'

function App({panier= []}) {

  return (
    <>
      <Header panier={panier}/>
      <Mains/>
      <Footer></Footer>
    </>
  )
}

export default App
