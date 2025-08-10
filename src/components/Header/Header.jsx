
const Header = () => {
    return (
        <div className="max-w-7xl mx-auto mt-9">
            <nav className="flex justify-between items-center">
                <img className="w-16" src="/src/assets/logo.png" alt="" />
                <div className="text-gray-600 space-x-12 flex items-center">
                    <p>Home</p>
                    <p>Fixture</p>
                    <p>Teams</p>
                    <p>Schedules</p>
                    <div className="flex py-4 px-5 border border-[#1313131A] rounded-xl">
                        <p className="text-black font-medium"> <span>0</span> Coin</p>
                        <img className="w-5 ml-2" src="/src/assets/coin.png" alt="" />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;