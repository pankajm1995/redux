const initialstate={
    cardData:[]
}

// make a function and export 

export default function cardItems(state=initialstate,action)
{
    switch(action.type)
    {
        case "ADD_TO_CART":
        return
        {
           state,  
            cardData = action.data
        }
        break;
        default:
            return state
    }
}