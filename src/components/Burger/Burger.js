import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import Classes from "./Burger.module.css";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredient)
    .map((igkey) => {
      return [...Array(props.ingredient[igkey])].map((_, i) => {
        return <BurgerIngredient key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredient!</p>;
  };

  
  return (
    <div className={Classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
