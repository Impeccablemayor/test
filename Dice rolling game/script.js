const numOfDice= document.getElementById("input").value;
const diceResult= document.getElementById("diceResult");
const diceImages= document.getElementById("diceImages");

const values = [];
const Images = [];

function rollDice() {
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        Images.push(`<img src="Dice_image/${values}.jpg">`)
    }
    diceResult.textContent = `dice: ${values.join(', ')}`
    diceImages.innerHTML = Images.join('');
}