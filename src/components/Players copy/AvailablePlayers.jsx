import { useEffect, useState } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ AddPlayerToSelected }) => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('cricket.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    console.log(players);
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {
                players.map((player, idx) => <Player AddPlayerToSelected={AddPlayerToSelected} key={idx} player={player} ></Player>)
            }
        </div>
    );
};

export default AvailablePlayers;