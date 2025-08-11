import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('cricket.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto">
            <div className=" flex justify-between items-center">
                <p className="text-2xl font-semibold ">Available Players </p>
                <div>
                    <button className="border border-gray-300 py-4 px-8 rounded-l-xl">Available</button>
                    <button className="border border-gray-300 py-4 px-8 rounded-r-xl" >Selected ( <span>0</span> )</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {
                    players.map((player, idx) => <Player key={idx} player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;