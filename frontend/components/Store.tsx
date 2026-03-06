import React from 'react';
import Cards from './Cards';

const Store: React.FC = () => {
    return (
        <>
            <div className="min-h-screen flex bg-white dark:bg-black text-black dark:text-white">

                {/* ===== SIDEBAR ===== */}
                <aside className="w-72 hidden md:flex flex-col justify-between 
                        bg-gray-100 dark:bg-zinc-900 
                        border-r border-gray-300 dark:border-zinc-700
                        px-6 py-8">

                    {/* Top */}
                    <div>
                        <h1 className="text-2xl font-extrabold mb-6 tracking-wide">
                            ☕ Chai & Charcha
                        </h1>

                        <nav className="space-y-4 font-medium">
                            <p className="cursor-pointer hover:text-amber-600">🏠 Home</p>
                            <p className="cursor-pointer hover:text-amber-600">🫖 Chai</p>
                            <p className="cursor-pointer hover:text-amber-600">🍪 Biscuits</p>
                            <p className="cursor-pointer hover:text-amber-600">🔥 Combos</p>
                            <p className="cursor-pointer hover:text-amber-600">📦 Orders</p>
                        </nav>
                    </div>

                    {/* Bottom */}
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Tapri vibes • Since 2026
                    </div>
                </aside>

                {/* ===== MAIN CONTENT ===== */}
                <main className="flex-1 px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        ☕ Chai & Charcha Store
                    </h2>

                    <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                        Yahan milegi garam chai, biscuits aur tapri wali vibes.
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                        <div className="p-6 rounded-xl bg-gray-100 dark:bg-zinc-900 shadow">
                            <h3 className="font-bold text-xl">Masala Chai</h3>
                            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                                Garam, kadak, desi swaad
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-gray-100 dark:bg-zinc-900 shadow">
                            <h3 className="font-bold text-xl">Biscuit Combo</h3>
                            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                                Chai ke saath perfect
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-gray-100 dark:bg-zinc-900 shadow">
                            <h3 className="font-bold text-xl">Tapri Special</h3>
                            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                                Full desi adda feel
                            </p>
                        </div>

                    </div>
                </main>
            </div>
            <Cards />
        </>

    );
};

export default Store;