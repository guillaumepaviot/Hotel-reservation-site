import React from 'react'
import Hero from '../components/Hero.js'
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import RoomsContainer from'../components/RoomsContainer'

export default function Rooms () {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="nos chambres">
                <Link to="/" className="btn-primary">
                    retour à l'acceuil
                </Link>
            </Banner>
        </Hero>
        <RoomsContainer/>
        </>
    )
}

