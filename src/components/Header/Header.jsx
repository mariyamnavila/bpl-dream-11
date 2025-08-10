
const Header = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <nav className="flex justify-between items-center bg-white/60 pb-6 pt-9 ">
            {/* sticky top-0 z-50 backdrop-blur-md */}
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
            <div className="bg-[url(./src/assets/bg-shadow.png)] bg-black rounded-3xl py-16 text-center space-y-6">
            <img className="mx-auto" src="/src/assets/banner-main.png" alt="" />
            <h3 className="text-4xl font-semibold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h3>
            <h6 className="text-gray-400 font-medium text-2xl">Beyond Boundaries Beyond Limits</h6>
            <button className="py-4 px-5 text-black font-semibold bg-[#E7FE29] rounded-xl border-8 border-black outline outline-offset-2 outline-2 outline-[#E7FE29]">Claim Free Credit</button>
            </div> 
        </div>
    );
};

export default Header;