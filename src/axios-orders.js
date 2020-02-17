import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://react-my-burger-5b5d3.firebaseio.com/"
});
export default instance;
