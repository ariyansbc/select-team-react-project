import React from 'react';

const Teamcart = (props) => {

    // console.log("props", props.cart)
    // console.log(props)

    const cart = props.cart;
    console.log("cart", cart);
    let totalSalaryCost = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalSalaryCost += player.salary;
    }
    return (
        <div className="teamcart">
            <h3>Total player selected: {props.cart.length} </h3>
            <h3>Total Cost: ${totalSalaryCost} </h3>
            <br />
            <br />

        </div>
    );
};

export default Teamcart;