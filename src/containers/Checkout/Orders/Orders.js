import React, { Component } from "react";
import Order from "../../../components/Order/Order";
import axios from "../../../axios-orders";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    loading: true,
    orders: []
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const featchedOrdes = [];
        for (const key in res.data) {
          if (res.data.hasOwnProperty(key)) {
            featchedOrdes.push({
              ...res.data[key],
              id: key
            });
          }
        }
        this.setState({ orders: featchedOrdes });
      })
      .catch(er => {})
      .finally(fn => {
        this.setState({ loading: false });
      });
  }
  render() {
    // console.log(this.state.orders);

    return (
      <div>
        {this.state.orders.map(res => (
          <Order
            key={res.key}
            ingredients={res.ingredients}
            price={res.price}
          />
        ))}
      </div>
    );
  }
}
export default withErrorHandler(Orders, axios);
