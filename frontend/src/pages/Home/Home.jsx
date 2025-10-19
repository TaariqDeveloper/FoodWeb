import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenue from '../../components/ExploreMenue/ExploreMenue'

function Home() {
    const [category, setCategory] = useState("All")
    return (
        <div>
            <Header />
            <ExploreMenue category={category} setCategory={setCategory} />
        </div>
    )
}

export default Home
