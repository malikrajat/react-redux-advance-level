import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            className={classes.Input}
            type="email"
            name="name"
            placeholder="Your email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Enter street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postalCode"
            placeholder="Enter postalCode"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
  orderHandler = event => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.state.price,
      customar: {
        name: "Rajat",
        address: {
          street: "street 1",
          zipCode: "234567",
          country: "US"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(res => {
        console.log(res);
      })
      .catch(er => {
        console.log(er);
      })
      .finally(final => {
        this.setState({ loading: false });
      });
  };
}
