import React, { Component} from 'react';
import Aux from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    componentDidUpdate(){
        console.log('[OrderSummary] DidUpdate');
    }
    render(){
        
        const ingredientSummary= Object.keys(this.props.ingredients)
        .map(igkey =>{
            return (<li key={igkey}><span style={{textTransform : 'capatalize'}}>{igkey}</span> : {this.props.ingredients[igkey]}</li>)
        });

        return(
            <Aux>
            <h3>Your Order</h3>
            <p>Burger with following ingredients : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price : <strong>{this.props.price.toFixed(2)}</strong></p>
            <p>continue to checkout?</p>
            <Button bTnType="Danger"  clicked={this.props.purchaseCancled}>CANCEL</Button>
            <Button bTnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        );
    }
}

export default OrderSummary;