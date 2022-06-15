import axios from "axios";
import { CARD_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:5000/api/products/${id}`,);
    dispatch({ 
        type: CARD_ADD_ITEM, 
        payload: {
            product : data._id,
            name : data.name,
            image : data.image,
            price : data.price,
            countInStock : data.countInStock,
            qty
        } })

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

