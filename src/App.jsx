import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Newsletter from './components/Newsletter/Newsletter'
import Players from './components/Players/Players'
import { toast } from 'react-toastify';
import { useState } from 'react'


function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isHidden, setIsHidden] = useState(true)
  const [coins, setCoins] = useState(0)
  const AddCoins = () => {
    const newCoins = coins + 60000000
    setCoins(newCoins);
  }
  const stopDuplicate = (selected, coin, bidding_price) => {

    const isExists = selectedPlayers.find((player) => player.id === selected.id)
    // console.log(isExists);
    if (coin < bidding_price) {
      toast.error('Not enough money to buy this player.Claim some Credit', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    else if (!isExists) {
      if (selectedPlayers.length > 5) {
        toast.error('Your squad is full', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
      else {
        setSelectedPlayers([...selectedPlayers, selected])
        toast.success(`Congrats!! ${selected.name} is now in your squad`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        const remainingCoins = coins - (selected.bidding_price)
        setCoins(remainingCoins)
      }
    }
    else {
      toast.error('Player already selected', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  }

  const removePlayer = (player) =>{
    const afterRemoved = selectedPlayers.filter(selectedPlayer=> selectedPlayer !== player);
    setSelectedPlayers(afterRemoved)
  }

  return (
    <>
      <Header
        AddCoins={AddCoins}
        coins={coins}
        toast={toast}
      ></Header>
      <Players
        isHidden={isHidden} setIsHidden={setIsHidden}
        selectedPlayers={selectedPlayers}
        stopDuplicate={stopDuplicate}
        coins={coins}
        removePlayer={removePlayer}
      ></Players>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  )
}

export default App
