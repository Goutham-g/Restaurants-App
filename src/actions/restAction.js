import axios from "axios";
import { FAIL, SUCCESS } from "../constants/restConstants";


// logic to update store data
//api call ----dispachable function ,every component will dispatch the logic
export const getRestaurant = async (dispatch) => {
    try {

        const { data } = await axios.get('restaurants.json')
        console.log("Result:", data.restaurants);
        //dspatch the expected output payload to reducer

        dispatch(
            {
                payload: data.restaurants,
                type: SUCCESS
            }
        )

    } catch (error) {
        dispatch(
            {
                payload: error,
                type: FAIL
            }
        )

    }


}