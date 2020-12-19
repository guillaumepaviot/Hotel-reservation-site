import React from 'react'
import Hero from "../components/Hero.js"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"

export default function Error() {
    return <Hero>
        <Banner title="404" subtitle="page introuvable">
            <Link to="/" className="btn-primary">
                acceuil
            </Link>
        </Banner>
    </Hero>;
}
