// import { useEffect, useState } from "react";
import Player from "../Player/Player";
import AvailablePlayers from "../Players copy/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ AddPlayerToSelected, selectedPlayers, isHidden, setIsHidden }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className=" flex justify-between items-center">
                <p className="text-2xl font-semibold ">Available Players </p>
                <div>
                    <button
                        onClick={() => setIsHidden(true)}
                        className={`border border-gray-300 py-4 px-8 rounded-l-xl ${isHidden ? 'bg-yellow-300' : 'bg-white'}`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setIsHidden(false)}
                        className={`border border-gray-300 py-4 px-8 rounded-r-xl ${!isHidden ? 'bg-yellow-300' : 'bg-white'}`}
                    >
                        Selected  (<span>{selectedPlayers.length}</span> )
                    </button>
                </div>
            </div>
            {
                isHidden ? <AvailablePlayers AddPlayerToSelected={AddPlayerToSelected} /> : <SelectedPlayers selectedPlayers={selectedPlayers} />
            }
        </div>
    );
};

export default Players;