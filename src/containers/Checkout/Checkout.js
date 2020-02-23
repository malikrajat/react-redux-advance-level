import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

export default class Checkout extends Component {
  state = {
    ingredient: null,
    totalPrice: 0
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancel={this.checkoutCancelHandler}
          checkoutCountinue={this.checkoutContinueHandler}
          ingredients={this.state.ingredient}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredient}
              price={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      // ['salad', '1']
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredient: ingredients, totalPrice: price });
  }
  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
}
