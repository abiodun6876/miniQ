import React from 'react';

const About: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">What MiniQ Offers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Payment System Integration */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <i className="fas fa-money-bill-wave text-7xl text-blue-500 mb-4 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2">Payment System Integration</h3>
                        <p className="text-lg text-gray-700">Seamless integration of payment systems for easy transactions.</p>
                    </div>
                    {/* Investment Management */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <i className="fas fa-chart-line text-7xl text-green-500 mb-4 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2">Investment Management</h3>
                        <p className="text-lg text-gray-700">Procedural investment management with customizable investment patterns.</p>
                    </div>
                    {/* Community Interaction */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <i className="fas fa-users text-7xl text-yellow-500 mb-4 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2">Community Interaction</h3>
                        <p className="text-lg text-gray-700">Engage with a community of users, share insights, and collaborate.</p>
                    </div>
                    {/* Security Measures */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <i className="fas fa-lock text-7xl text-purple-500 mb-4 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2">Security Measures</h3>
                        <p className="text-lg text-gray-700">Advanced security algorithms to protect against threats like spamming and phishing.</p>
                    </div>
                    {/* User Location Services */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <i className="fas fa-map-marked-alt text-7xl text-red-500 mb-4 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2">User Location Services</h3>
                        <p className="text-lg text-gray-700">Utilize user location data for personalized services and features.</p>
                    </div>
                    {/* In-App Meeting Feature */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <i className="fas fa-video text-7xl text-indigo-500 mb-4 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2">In-App Meeting Feature</h3>
                        <p className="text-lg text-gray-700">Conduct meetings and discussions directly within the app for convenience.</p>
                    </div>
                    {/* Notification & Report Feature */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <i className="fas fa-bell text-7xl text-pink-500 mb-4 mx-auto"></i>
                        <h3 className="text-xl font-bold mb-2">Notification & Report Feature</h3>
                        <p className="text-lg text-gray-700">Stay updated with notifications and generate detailed reports for analysis.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
