// import { useEffect, useState } from "react";
import Player from "../Player/Player";
import AvailablePlayers from "../Players copy/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ selectedPlayers, isHidden, setIsHidden, stopDuplicate, zeroCoinAlert, coins }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className=" flex justify-end items-center">
                <div>
                    <button
                        onClick={() => setIsHidden(true)}
                        className={`border border-gray-300 py-4 px-8 rounded-l-xl ${isHidden ? "bg-[#E7FE29]" : 'bg-white'}`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setIsHidden(false)}
                        className={`border border-gray-300 py-4 px-8 rounded-r-xl ${!isHidden ? 'bg-[#E7FE29]' : 'bg-white'}`}
                    >
                        Selected  (<span>{selectedPlayers.length}</span> )
                    </button>
                </div>
            </div>
            {
                isHidden
                    ? <AvailablePlayers
                        stopDuplicate={stopDuplicate}
                        zeroCoinAlert={zeroCoinAlert}
                        coins={coins}
                    />
                    : <SelectedPlayers 
                    setIsHidden={setIsHidden}
                    selectedPlayers={selectedPlayers}
                    />
            }
        </div>
    );
};

export default Players;