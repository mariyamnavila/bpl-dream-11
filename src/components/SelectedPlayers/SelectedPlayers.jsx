import Selected from "../Selected/Selected";

const SelectedPlayers = ({selectedPlayers,setIsHidden}) => {
    
    return (
        <div  className="max-w-7xl mx-auto mt-8">
            <h4  className="text-2xl font-semibold mb-8">Selected Players ( {selectedPlayers.length} / 6)</h4>
            {selectedPlayers.map((selectedPlayer,idx)=>  <Selected 
            key={idx} 
            selectedPlayer={selectedPlayer}
            ></Selected>)}
            <button 
            onClick={() => setIsHidden(true)}
            className="rounded-xl py-4 px-5 bg-[#E7FE29] border-8 border-white outline outline-offset-1 outline-black"
            >Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;