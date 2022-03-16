import axios from "axios";
import {setProducts} from "../reducers/product-reducer";

export const getProducts = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:443/api/product`)
        dispatch(setProducts(response.data))
    }
}