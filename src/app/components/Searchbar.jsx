"use client"

import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'


const Searchbar = () => {

    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e) => {
        if (e.target.value == '') {
            setActiveSearch([])
            return false
        }
        setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0, 8))
    }
    return (
        <form className='w-[400px] relative ml-80 justify-center items-center'>
            <div className="relative w-full">
                <input
                    type="search"
                    placeholder="Type Here"
                    className="w-full p-4 pr-16 rounded-full bg-gray-200"
                    onChange={(e) => handleSearch(e)}
                />
                <button className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-4 p-4 bg-gray-100 rounded-full">
                    <AiOutlineSearch />
                </button>
            </div>

            {
                activeSearch.length > 0 && (
                    <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                        {
                            activeSearch.map(s => (
                                <span>{s}</span>
                            ))
                        }
                    </div>
                )
            }

        </form>
    )
}
export default Searchbar
