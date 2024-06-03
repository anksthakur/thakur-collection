export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((currElement) => {
                return currElement.id !== action.payload;
            })
        }
    }

    // increment
    if (action.type === "INCREMENT") {
        let updatedCart = state.item.map((currElement) => {
            if (currElement.id === action.payload) {
                return { ...currElement, quantity: currElement.quantity + 1 };
            }
            return currElement;
        })
        return { ...state, item: updatedCart };
    }
    // decrement
    if(action.type === "DECREMENT"){
        let updatedCart = state.item.map((currElement)=>{
            if(currElement.id === action.payload){
                return {...currElement,quantity:currElement.quantity-1}  
            }
            return currElement;
        }).filter((currElement) => currElement.quantity !== 0);
        return {...state,item:updatedCart};
    }
    // GET total
    if(action.type === "GET_TOTAL"){
        let {totalItem} = state.item.reduce((acc,curVal)=>{
            let {quantity} = curVal;
            acc.totalItem += quantity;
            return acc;
        },{
            totalItem:0,
        })
        return {...state,totalItem};
    }
    return state;
}
