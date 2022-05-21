//  let cards=[]
//  let lname;
// let fname;
// let fullname = document.getElementById("player-el")
//  //let secondCard=getRandomCard()
// let sum=0
// let hasBlackJack=false
//  //let cards=[firstCard,secondCard ]
// let isAlive=false
// let message=""

// let report=document.getElementById("message-el")

// let cardEl=document.getElementById("card-el")
// let sumEl=document.getElementById("sum-el")

// let player={
//      name:"Nwafor",
//      chips:145
// }

// ' '
// document.getElementById("fname").addEventListener("change", (e) => {
//     fname = e.target.value
// })

// //fname.textContent=player.name+": $"+player.chips
// document.getElementById("lname").addEventListener("change", (e) => {
//     lname = e.target.value
// })

// function sub(){
//     // console.log(sumbitEl)
//     fullname.textContent=`${fname} ${lname} : ${player.chips}`
// }
// // sumbitEl+": $"+player.chips

// function renderGame(){

//     cardEl.textContent="cards: "
//     for(let i=0;i<cards.length;i++){
//         cardEl.textContent+=cards[i]+" "
        
//     }
// if (sum<=20){
    
//     message="Do you want to draw a new card?"
// }
// else if(sum===21){
//     message="Wohoo! You've got Blackjack!"
//     hasBlackJack=true
// } 
// else{
//     message="You're out of the game!"
//     isAlive=false
// }
// report.innerText=message
// sumEl.innerText="Sum: "+sum
 
// }


// function newCard(){
// if(isAlive==true&&sum<21){ 
// let card=getRandomCard()
// sum+=card
// cards.push(card)
// cards.splice(0,1)
// renderGame()
// }
// }
// function startGame(){
//     isAlive=true
//     let firstCard=getRandomCard()
//     let secondCard=getRandomCard()

//     cards=[firstCard,secondCard]
//     sum=firstCard+secondCard
//     renderGame()
    
// }

// function getRandomCard(){
//     let randomNumber= Math.round(Math.random()*13)+1
//     if(randomNumber>10){
//         return 10
//     }
//     else if (randomNumber ===1){
//         return 11
//     }
//     else return randomNumber
// }

 

function startGame(){
    let fullname=document.getElementById('fname').textContent
    console.log(fullname)
}


