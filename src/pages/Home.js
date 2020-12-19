import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import Services from "../components/Services"
import FeaturedRooms from '../components/FeatureRooms'


export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="vous venez skier ?" subtitle="venez vous reposer comme des marmottes chez nous à partir de 499€">
                <Link to="/rooms" className="btn-primary">
                    nos chambres
                </Link>
            </Banner>
        </Hero>
        <Services></Services>
        <FeaturedRooms/>
        </>
    );
}
