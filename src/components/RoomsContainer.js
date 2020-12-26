import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomList'
import {RoomConsummer} from '../Context'
import Loading from './Loading'

export default function RoomsContainer() {
    return (
        <RoomConsummer>
            {value => {
                const {loading, sortedRooms, rooms} = value;

                if(loading){
                    return <Loading/>;
                }
                return(
                    <div>
                        <RoomsFilter rooms={rooms}/>
                        <RoomList rooms={sortedRooms}/>
                    </div>
                );
            }}
        </RoomConsummer>
    );
}
