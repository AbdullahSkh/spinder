import React from 'react'
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

function Home() {
    return (
        <div className='flex'>
            <div>
                <Navbar />
            </div>
            <div>
                <Searchbar />
            </div>

        </div>
    )
}

export default Home
