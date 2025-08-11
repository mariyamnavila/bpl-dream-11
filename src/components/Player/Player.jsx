import { RiUserFill } from "react-icons/ri";
import { IoFlagSharp } from "react-icons/io5";


const Player = ({ player }) => {
    const { name, country, image, role, batting_type, bowling_type, bidding_price } = player
    return (
        <div className="p-6 space-y-4 border border-gray-300 rounded-2xl">
            <img className="rounded-2xl w-[375px] h-[240px] object-cover" src={image} alt="" />
            <div className="flex items-center mt-4">
                <RiUserFill className="text-2xl" />
                <p className="text-xl ml-2">{name}</p>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-b-gray-600">
                <div className="text-gray-500 flex justify-between items-center">
                    <IoFlagSharp className="text-xl"/>
                    <p className=" ml-2">{country}</p>
                </div>
                <div>
                    <p className="text-[14px] py-2 px-4 bg-gray-200 rounded-lg">{role}</p>
                </div>
            </div>
            <p className="font-semibold">Rating</p>
            <div  className="flex justify-between items-center">
                <p className="font-medium">{batting_type}</p>
                <p className="text-gray-500">{bowling_type}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-medium">Price: ${bidding_price}</p>
                <button className="py-2 px-4 text-[14px] border border-gray-300 rounded-lg hover:bg-yellow-300">Choose Player</button>
            </div>
        </div>
    );
};
export default Player;