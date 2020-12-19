import React, { Component } from 'react'
import {FaBed, FaHiking, FaShuttleVan, FaMap} from 'react-icons/fa'
import Title from "./Title"

export default class Services extends Component {
    state  = {
        services:[
            {
                icon:<FaBed/>,
                title:"Chambre Tout Confort",
                info:"Après avoir profité du domaine, le confort de votre chambre vous permettra de reprendre vos forces"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Navettes Gratuites",
                info:"Des navettes relient l'hôtel au bas des pistes de ski pour que vous ne manquiez pas la poudreuse du matin"
            },
            {
                icon:<FaHiking/>,
                title:"Randonnées Nature",
                info:"Pour ceux qui n'aiment pas la glisse, nos guides vous feront découvrir les plus beaux endroits des alentours"
            },
            {
                icon:<FaMap/>,
                title:"Situation Exceptionnelle",
                info:"L'hôtel est idéalement situé dans Mégève, à deux pas du centre et avec vue sur le domaine"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="nos services"></Title>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
