import React from 'react'
import LoadingGif from '../images/loading-arrow.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>Un peu de patience, les données chargent...</h4>
            <img src={LoadingGif} alt=""></img>
        </div>
    )
}
