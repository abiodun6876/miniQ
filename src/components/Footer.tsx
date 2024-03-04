import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className=""  style={{ marginTop: '8rem', backgroundColor: '#54afe8' }}>
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                    <h3 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-8 text-center">Download MiniQ</h3>
                    <p className="font-bold">Empowering users for better financial management.</p>
                    <div className="flex justify-center my-10">
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" alt="Google Play Store" />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200 font-bold'>Download on</p>
                                <p className="text-sm md:text-base font-bold">Google Play Store</p>
                            </div>
                        </div>
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" alt="Apple App Store" />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200 font-bold'>Download on</p>
                                <p className="text-sm md:text-base font-bold">Apple App Store</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-8 md:mt-0">&copy; {new Date().getFullYear()} MiniQ</p>
                    <div className="order-1 md:order-2">
                        <span className="px-2 font-bold">About</span>
                        <span className="px-2 border-l font-bold">Contact</span>
                        <span className="px-2 border-l font-bold">Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
