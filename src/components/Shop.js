import guitars from "./guitars"
import Card from "./Card"
import { useState } from "react";

function Shop (props) {

  return(
    <div id="shop">
      <h1>Guitars</h1>
      <div className="products">
        {guitars.map((guitar) => 
          <Card name={guitar.name} img={guitar.img} price={guitar.price} adjustCart={props.adjustCart}/>
        )}
      </div>
    </div>
  ) 
}

export default Shop