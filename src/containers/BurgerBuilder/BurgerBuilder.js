import React, { Component } from "react";

import Aux from "../../hoc/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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

    purchasable: false,

    purchasing: false,
  };

  updatePurchaseState = (ingredient) => {
      const sum = Object.keys(ingredient)
        .map((igkey) => {
          return ingredient[igkey];
        })
        .reduce((total, comingFromArray) => {
          return total + comingFromArray;
        }, 0);

      this.setState({
        purchasable: sum > 0,
      });
  };

  addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updateCount = oldCount + 1;
        const updateIngredient = { ...this.state.ingredient };

        updateIngredient[type] = updateCount;

        const priceAddition = INGERDIEN_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;

        this.setState({
          ingredient: updateIngredient,
          totalPrice: newPrice,
        });

        this.updatePurchaseState(updateIngredient);
  };

  removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if (oldCount <= 0) {
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
          totalPrice: newPrice,
        });
        this.updatePurchaseState(updateIngredient);
  };

  purchasingHandler = () => {
      this.setState({
        purchasing: true,
      });
  };

  purchasingCancel = () => {
      this.setState({
        purchasing: false,
      });
  };

  purchasingContinue = () => {
    alert('You Continue!!')
  }

  render() {
    const disableinfo = { ...this.state.ingredient };
    for (let key in disableinfo) {
      disableinfo[key] = disableinfo[key] <= 0;
    }
    return (
      <Aux>
        
        <Modal show={this.state.purchasing} modelClosed={this.purchasingCancel}>
            <OrderSummary 
              ingredients={this.state.ingredient} 
              price = {this.state.totalPrice}
              purchaseCancel = {this.purchasingCancel}
              purchaseContinue = {this.purchasingContinue}
            />
        </Modal>

        <Burger ingredient={this.state.ingredient} />

        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientDelete={this.removeIngredientHandler}
          purchasable={this.state.purchasable}
          order={this.purchasingHandler}
          disableButton={disableinfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
