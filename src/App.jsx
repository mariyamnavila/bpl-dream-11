import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Newsletter from './components/Newsletter/Newsletter'
import Players from './components/Players/Players'
import { toast } from 'react-toastify';


function App() {

  return (
    <>
      <Header toast={toast}></Header>
      <Players></Players>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  )
}

export default App
