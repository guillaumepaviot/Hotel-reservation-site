import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state ={
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = RoomContext;

    componentDidMount() {

    }
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (<div className="error">
                <h3>Nous n'avons pas la chambre que vous cherchez</h3>
                <Link to="/rooms" className="btn-primary">Retour à la liste des chambres</Link>
            </div>
            );
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg,...defaultImg] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name}`}>
                    <Link to="/rooms" className="btn-primary">
                        Retour aux chambres
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index) => {
                        return <img key={index} src={item} alt={name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>
                            Détails
                        </h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>
                            Informations
                        </h3>
                        <h6>Prix : {price}€</h6>
                        <h6>Taille : {size}m<sup>2</sup></h6>
                        <h6>
                            Capacité maximale : {" "}
                                {capacity > 1 ? `${capacity} personnes`: `${capacity} personne`
                            }
                        </h6>
                        <h6>{pets? "Les animaux sont autorisés" : "Les animaux ne sont pas autorisés"}</h6>
                        <h6>{breakfast && "Petit-déjeuner inclus"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}
