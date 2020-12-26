import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from './Title'

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;

    const getUnique = (items, value) => {
        return [...new Set((items.map(items => items[value])))]
    }
    
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item,index) => {
        return (<option value={item} key={index}>{item}</option> );
    });

    return (
        <section className="filter-container">
            <Title title="Cherchez votre future chambre" />
            <form classname="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Type de chambre</label>
                    <select 
                        name="type"
                        id="type"
                        value={type}
                        class="form-control"
                        onChange={handleChange}
                        >
                            {types}
                        </select>
                </div>
            </form>
        </section>
    )
}
