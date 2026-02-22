import React, { useState } from 'react'
import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

    const [category, setCategory] = useState("All");

    const scrollToMenu = () => {
        const section = document.getElementById("explore-section");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>

            {/* HERO SECTION */}
            <section className="hero">

                <div className="hero-content">

                    <h1>
                        Order your favourite food
                    </h1>

                    <p className="hero-sub">
                        Choose from a diverse menu featuring a delectable array of dishes.
                        Our mission is to satisfy your cravings and elevate your dining experience,
                        one delicious meal at a time.
                    </p>

                    <button onClick={scrollToMenu}>
                        Explore Menu
                    </button>

                </div>

            </section>

            {/* MENU SECTION */}
            <section id="explore-section" className="section">
                <ExploreMenu category={category} setCategory={setCategory}/>
            </section>

            {/* FOOD DISPLAY */}
            <section className="section-alt">
                <FoodDisplay category={category}/>
            </section>

        </div>
    )
}

export default Home