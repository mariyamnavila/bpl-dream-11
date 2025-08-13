import { useEffect, useState } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ stopDuplicate, zeroCoinAlert, coins }) => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('cricket.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    // console.log(players);


    return (
        <div>
            <p className="text-2xl font-semibold mt-6">Available Players </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    players.map((player, idx) => <Player
                        key={idx}
                        player={player}
                        stopDuplicate={stopDuplicate}
                        zeroCoinAlert={zeroCoinAlert}
                        coins={coins}
                    ></Player>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;