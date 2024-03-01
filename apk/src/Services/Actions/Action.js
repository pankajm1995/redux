import { ADD_TO_CART } from '../Service/Constains'
export const addToCart=(data)=>
{
    return({
        type: ADD_TO_CART,
        data:data
    } )
}