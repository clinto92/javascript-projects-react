
import React from 'react'
const cutPieces = function(fruit) {
    return fruit * 5;
} 

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2,3))

export const Switch = () => {
    return (
        <div>
            <h1>Switch from material Ui</h1>
        </div>
    )
}
