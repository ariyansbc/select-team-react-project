import React from 'react';
import './Players.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {

    const { name, image, salary,title } = props.players;
    const handleAddPlayers = props.handleAddPlayers;
    return (
        <div className="players">
            
            <div className="players-image">
                <img src={image} alt="" />
            </div>
            <div className="player-details">
                <h3>Player Name: {name}</h3>
                <h3>Salary: {salary}</h3>
                <button className="btn btn-primary"  onClick={()=>handleAddPlayers(props.players)} > <FontAwesomeIcon icon={faShoppingCart} /> Add to team</button>
            </div>

        </div>
    );
};

export default Players;