import { MdDeleteOutline } from "react-icons/md";

const Selected = ({selectedPlayer}) => {
    // console.log(selectedPlayer);
    
    const {name,image,role,bidding_price} = selectedPlayer;
    return (
        <div className="p-6 flex justify-between items-center border border-gray-300 rounded-2xl mb-6">
            <div className="flex justify-start items-center">
                <img className="w-20 object-cover h-20 rounded-2xl" src={image} alt="" />
                <div className="ml-6 space-y-3">
                    <p className="text-2xl ">{name}</p>
                    <p className="text-gray-500">{role}</p>
                    <p className="text-gray-500">Price: ${bidding_price}</p>
                </div>
            </div>
            <MdDeleteOutline  className="text-red-400 text-2xl"/>
        </div>
    );
};

export default Selected;