import React, { useState } from 'react';
import Coin from './Coin';

const CoinFlipper = () => {
    // set states
    const [numFlips, setNumFlips] = useState(0);
    const [numHeads, setNumHeads] = useState(0);
    const [numTails, setNumTails] = useState(0);
    const [currentFace, setCurrentFace] = useState(null);

    const flipCoin = () => {
        const isHeads = Math.random() < 0.5;
        setNumFlips(numFlips + 1);
        if (isHeads) {
            setNumHeads(numHeads + 1);
            setCurrentFace("heads");
        } else {
            setNumTails(numTails + 1);
            setCurrentFace("tails");
        }
    }

    return (
        <div className="CoinFlipper">
            <h1> Let's flip a coin!</h1>
            <Coin face={currentFace} />
            <button onClick={flipCoin}>Flip Me!</button>
            <p>Out of {numFlips}, there have been {numHeads} heads and {numTails} tails</p>
        </div>
    )
}
export default CoinFlipper;