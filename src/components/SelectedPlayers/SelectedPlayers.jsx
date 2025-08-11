import Selected from "../Selected/Selected";

const SelectedPlayers = ({selectedPlayers}) => {
    
    return (
        <div  className="max-w-7xl mx-auto mt-8">
            {selectedPlayers.map((selectedPlayer,idx)=>  <Selected 
            key={idx} 
            selectedPlayer={selectedPlayer}
            ></Selected>)}
        </div>
    );
};

export default SelectedPlayers;