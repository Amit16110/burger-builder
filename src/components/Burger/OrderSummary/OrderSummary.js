import React from 'react';

import Aux from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientOrderSummary = Object.keys(props.ingredients).map((igkey) => {
        return (<li>
        <span style = {{textTransform: 'capitalize'}}>
             {igkey}</span> : {props.ingredients[igkey]}
        </li>)
    })
    return (
        <Aux>
            <h3> YOUR ORDER </h3>
            <p>A delicious burger with the following ingredients:</p>
            
            <ul>
                {ingredientOrderSummary}
            </ul>

            <p><strong>Total Price:{props.price.toFixed(2)} </strong></p>
            <p>Continue to Checkout?</p>
                     {/* A button components */}
            <Button btnType = "Danger" clicked = {props.purchaseCancel}>
                CANCEL
            </Button>

            <Button btnType = "Success" clicked = {props.purchaseContinue}>
                CONTINUE
            </Button>

        </Aux>
    ); 
}

export default OrderSummary;