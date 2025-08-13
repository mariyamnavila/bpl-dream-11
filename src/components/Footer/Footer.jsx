
const Footer = ({footer}) => {
    return (
        <div className="bg-black pt-60">
            <div className="max-w-7xl mx-auto text-gray-400">
                <div>
                    <img className="mx-auto mb-16" src={footer} alt="" />
                </div>
                <div className="pb-16 border-b border-gray-400 flex flex-col md:flex-row justify-between space-y-4 ml-5 md:ml-0">
                    <div className="space-y-3">
                        <h6 className="text-white text-xl" >About Us</h6>
                        <p className="w-[290px] md:w-[200px] lg:w-[290px]">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className="space-y-3">
                        <h6 className="text-white text-xl">Quick Links</h6>
                        <ul className="list-disc ml-7 space-y-2">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h6 className="text-white text-xl">Subscribe</h6>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                    <div className="relative inline-block mt-5 ">
                            <input className="rounded-l-xl py-3 px-7 w-[200px] md:w-auto" type="text" placeholder="Enter your email" />
                            <button className="font-semibold py-3 px-7 text-black bg-gradient-to-l from-pink-300 to-orange-300 rounded-r-xl">Subscribe</button>
                            {/* bg-linear-to-bl from-[#fbdaa8] to-[#fa889b] */}
                    </div>
                    </div>
                </div>
                <div>
                    <p className="text-center py-8">@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;