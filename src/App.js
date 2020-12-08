import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  "🍇" : " Grapes",
  "🥭" : "Mango",
  "🥝" : "Kiwi",
  "🍞" : "Bread",
  "🍕" : "Pizza",
  "🍚" : "Cooked Rice",
  "🍻" : "Clinking Beer Mugs",
  "☕" : "Hot Beverage"
}

let foodsWeKnow = Object.keys(foodDictionary)

export default function App() {
  
  const [meaning , setMeaning] = useState("");

  function inputHandler(event){
    let userInput = event.target.value;
    let meaning = foodDictionary[userInput];

    if(userInput === ''){
      meaning = '';
    }
    else if(meaning === undefined){
      meaning = "Is it tasty enough? Sorry we do not know that ☹️"
    }
    //update meaning in state
    setMeaning(meaning);
  }

  function emojiClickHandler(food){
    let meaning = foodDictionary[food];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Hungry?? Search your food</h1>
      <input id = "emoji-input"  onChange = {inputHandler} />
      <h3 id ="emoji-meaning">{meaning}</h3>
      <h3>Foods we recognise</h3>
      <div id ="emojis">
        {
          foodsWeKnow.map(food => {
            return <span 
                          key = {food}
                          style = {
                                    {
                                      fontSize:"1.5rem",
                                      padding:"0.5rem",
                                      cursor: "pointer"
                                    }
                                  }
                          onClick = {() => emojiClickHandler(food)}
                   >
                   {food}
                   </span>
          })
        }
      </div>
    </div>
  );
}
