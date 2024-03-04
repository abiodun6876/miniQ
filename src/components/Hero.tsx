import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative isolate px-6 lg:px-8 grid gap-8 md:grid-cols-2 justify-items-center" style={{ marginTop: '8rem', backgroundColor: '#14b8a6' }}>
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
            <div className="mx-auto max-w-2xl  py-8 sm:py-16 lg:py-20 ">
                <div className="text-center ">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ms-3">MiniQ</h1>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl" style={{ color: '#ffffff' }}>Accepting payment system integration, procedural investment, and returns of investment.</h2>
                    
                    {/* Images section start here */}
                    <div className="flex justify-center items-center mt-8">
                        <div className="mr-12">
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">Create Account <span aria-hidden="true">&rarr;</span></a>
                    </div>
                        </div>
                    </div>
                    {/* Images section stop here */}
                </div>
            </div>
            {/* Right column for advert (visible on desktop only) */}
            <div className="ml-12 hidden md:block" style={{ width: '100%' }}>
                <img src="/miniq-right.jpg" alt="sideimage" style={{ width: '100%' }} />
            </div>
        </div>
    );
}

export default Hero;
