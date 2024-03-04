import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div style={{ backgroundColor: '#54afe8' }}>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">

                        <a href="#" className="-m-1.5 p-1.5">
                        <img src="/mini-logo.png" alt="MiniQ Logo" className="w-30 h-35" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMobileMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-sm font-bold leading-6 text-gray-900">ABOUT</a>
                        <a href="#" className="text-sm font-bold leading-6 text-gray-900">CONTACT</a>
                        <a href="#" className="text-sm font-bold leading-6 text-gray-900">COMMUNITY</a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href=" /auth/signup" className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">Create Account <span aria-hidden="true">&rarr;</span></a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="/auth/signin" className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">Log in <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </nav>
            </header>

            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
                    <div className="flex flex-col items-center justify-center h-full">
                        <button type="button" className="absolute top-4 right-4 p-2 text-gray-700" onClick={toggleMobileMenu}>
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">About</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">Community</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">Organization</a>
                                </div>
                                <div className="py-6">
                                    <a href=" /auth/signin" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                                </div>
                               
                       
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
