import React from 'react'

const Cards = () => {
    return (
        <>
            <section id='card' >
                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        ☕ Chai & Charcha Cards
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="p-6 rounded-xl bg-gray-100 dark:bg-zinc-900 shadow">
                            <h3 className="font-bold text-xl">Masala Chai</h3>
                            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                                Garam, kadak, desi swaad
                            </p>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Cards