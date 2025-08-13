
const Header = ({ toast, AddCoins, coins, logo, banner, coinImg }) => {

    return (
        <div className="max-w-7xl mx-auto px-4">
            <nav className="flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-white/60 pb-6 pt-9 ">
                <img className="w-16" src={logo} alt="" />
                <div className="text-gray-600 space-x-12 flex items-center">
                    <div className="hidden md:flex space-x-12 ">
                        <p>Home</p>
                        <p>Fixture</p>
                        <p>Teams</p>
                        <p>Schedules</p>
                    </div>
                    <div className="flex py-4 px-5 border border-[#1313131A] rounded-xl">
                        <p className="text-black font-medium"> {coins} Coin</p>
                        <img className="w-5 ml-2" src={coinImg} alt="" />
                    </div>
                </div>
            </nav>
            <div className="bg-[url('/src/assets/bg-shadow.png')] bg-black rounded-3xl py-16 text-center space-y-6 mb-20">
                <img className="mx-auto" src={banner} alt="" />
                <h3 className="text-4xl font-semibold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <h6 className="text-gray-400 font-medium text-2xl">Beyond Boundaries Beyond Limits</h6>
                <button onClick={() => {
                    AddCoins();
                    toast.success('Credit Added to your Account', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                }} className="py-4 px-5 text-black font-semibold bg-[#E7FE29] rounded-xl border-8 border-black outline outline-offset-2 outline-2 outline-[#E7FE29]">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Header;