import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Newsletter from './components/Newsletter/Newsletter'
import Players from './components/Players/Players'
import { toast } from 'react-toastify';
// import Selecteds from './components/SelectedPlayers/SelectedPlayers'
import { useState } from 'react'


function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isHidden, setIsHidden] = useState(true)

  const AddPlayerToSelected = (player) => {
    const newSelectedPlayers = [...selectedPlayers, player];
    setSelectedPlayers(newSelectedPlayers)
  }

  return (
    <>
      <Header toast={toast}></Header>
      <Players
        AddPlayerToSelected={AddPlayerToSelected}
        isHidden={isHidden} setIsHidden={setIsHidden}
        selectedPlayers={selectedPlayers}
      ></Players>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  )
}

export default App
