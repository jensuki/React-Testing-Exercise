import React from 'react';
import './Coin.css'

const Coin = ({ face }) => {
    if (!face) return null;
    const coinImage = face === "heads"
        ? "https://camp2.rectangle.zone/images/7/75/Heads.png"
        : "https://camp2.rectangle.zone/images/6/6a/Tails.png";

    return (
        <div className="Coin">
            <img src={coinImage} alt={face} />
        </div>
    )
}
export default Coin;