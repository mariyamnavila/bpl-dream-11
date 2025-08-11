
const Newsletter = () => {
    return (
        <div className="relative -bottom-52 max-w-7xl mx-auto border-2 border-white rounded-3xl">
            <div className="border-[24px] border-transparent rounded-3xl">
                <div className="bg-[url(./src/assets/bg-shadow.png)] bg-white py-24 text-center rounded-3xl ">
                    <h4 className="text-3xl font-semibold">Subscribe to our Newsletter</h4>
                    <p className="mt-4 text-xl font-medium text-gray-500">Get the latest updates and news right in your inbox!</p>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center items-center md:space-x-4 mt-6">
                        <input className="py-5 px-8 rounded-xl border border-gray-300 w-[290px] md:w-auto" placeholder="Enter your email" type="text" name="" id="" />
                        <button className="text-black w-[290px] md:w-auto font-semibold bg-gradient-to-l from-pink-300 to-orange-300 py-5 px-8 rounded-xl">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;