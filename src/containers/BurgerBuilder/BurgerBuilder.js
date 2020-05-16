import React, { Component } from "react";

import Aux from "../../hoc/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGERDIEN_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredient[type];
    const updateCount = oldCount + 1;
    const updateIngredient = { ...this.state.ingredient };

    updateIngredient[type] = updateCount;

      const priceAddition = INGERDIEN_PRICE[type]
      const oldPrice = this.state.totalPrice;
      const newPrice = priceAddition + oldPrice;

      this.setState({
        ingredient : updateIngredient,
        totalPrice: newPrice 
      })

  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredient[type];
      if(oldCount <= 0) {
        return;
      }
    const updateCount = oldCount - 1;
    const updateIngredient = { ...this.state.ingredient };

    updateIngredient[type] = updateCount;

    const priceSub = INGERDIEN_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSub;

    this.setState({
      ingredient: updateIngredient,
      totalPrice: newPrice
    });
  };

  render() {
    return (
      <Aux>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls 
          ingredientAdded = {this.addIngredientHandler}
          ingredientDelete = {this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
