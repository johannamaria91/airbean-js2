import { ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, REMOVE_QUANTITY, SET_TIME, UPDATE_TIME, ADD_ORDER_NUMBER, LOG_IN, SET_TOTAL_PRICE, SAVE_TO_ORDER_HISTORY, INC_QUANTITY, SAVE_TO_TOTAL_PRICE, RESET, SET_ORDER_DATE } from '../actions/actionTypes';

const initialState = {
    items: [],
    quantity: 0,
    newOrder: {
        orderTime: 0,
        currentOrderNumber: 0,
        totalPrice: 0,
        orderDate: ""
    },
    orderNumbers: [],
    loggedIn: false,
    user: {
        name: "",
        email: "",
        orderHistory: [],
        total: 0
    }
}

 function updatedState (state = initialState, action) {
     
     
    
    
    
    switch (action.type){
        case ADD_ITEM: {
            return {
                ...state,
                items: [...state.items, action.payload] 
            }
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                items: [...state.items.filter((item, index) => index !== action.payload)]
            }
        }
        case ADD_QUANTITY: {
            let index = state.items.findIndex(items => items.id === action.payload.id);
            let newItemsArray = [...state.items];
            if(!newItemsArray[index].hasOwnProperty('quantity')) {
                newItemsArray[index].quantity = 1;
            } else {
                newItemsArray[index].quantity = newItemsArray[index].quantity + 1;
            }
            return {
                ...state,
                items: newItemsArray,
            }
        }
        case REMOVE_QUANTITY: {
            let index = state.items.findIndex(items => items.id === action.payload.id);
            let newItemsArray = [...state.items];
            newItemsArray[index].quantity = newItemsArray[index].quantity - 1;
            return {
                ...state,
                items: newItemsArray
            }
        }
        case SET_TIME: {
            return {
                ...state,
                newOrder: {
                    orderTime: action.payload,
                    currentOrderNumber: state.newOrder.currentOrderNumber,
                    totalPrice: state.newOrder.totalPrice,
                    orderDate: state.newOrder.orderDate
                }
            }
        }
        case UPDATE_TIME: {
            
            
            return {
                ...state,
                newOrder: {
                    orderTime: state.newOrder.orderTime - action.payload,
                    currentOrderNumber: state.newOrder.currentOrderNumber,
                    totalPrice: state.newOrder.totalPrice,
                    orderDate: state.newOrder.orderDate
                }
            }
        }
        case ADD_ORDER_NUMBER: {
            return {
                ...state,                    
                orderNumbers: [...state.orderNumbers, action.payload],
                newOrder: {
                    orderTime: state.newOrder.orderTime,
                    currentOrderNumber: action.payload,
                    totalPrice: state.newOrder.totalPrice,
                    orderDate: state.newOrder.orderDate
                }
            }
        }
        case LOG_IN: {
            return {
                ...state,
                loggedIn: action.payload,
                user: {
                    name: action.payloadtwo,
                    email: action.payloadthree,
                    orderHistory: state.user.orderHistory,
                    total: state.user.total
                }
            }
        }
        case SET_TOTAL_PRICE: {
            return {
                ...state,                    
                newOrder: {
                    orderTime: state.newOrder.orderTime,
                    currentOrderNumber: state.newOrder.currentOrderNumber,
                    totalPrice: action.payload,
                    orderDate: state.newOrder.orderDate
                }
            }
        }
        case SAVE_TO_ORDER_HISTORY: {
            return {
                ...state, 
                                 
                user: {
                    name: state.user.name,
                    email: state.user.email,
                    orderHistory: [...state.user.orderHistory, action.payload],
                    total: state.user.total
                }
            }
        }
        case INC_QUANTITY: {
            return {
                ...state,
                quantity: state.quantity + action.payload
            }
        }
        case SAVE_TO_TOTAL_PRICE: {
            return {
                ...state,                    
                user: {
                    name: state.user.name,
                    email: state.user.email,
                    orderHistory: state.user.orderHistory,
                    total: state.user.total + action.payload
                }
            }
        }
        case RESET: {
            return {
                ...state,
                items: [],
                quantity: 0
                
            }
        }
        case SET_ORDER_DATE: {
            return {
                ...state,
                newOrder: {
                    orderTime: state.newOrder.orderTime,
                    currentOrderNumber: state.newOrder.currentOrderNumber,
                    totalPrice: state.newOrder.totalPrice,
                    orderDate: action.payload
                }
                
            }
        }
        default: 
            return state;
    
 }
 }
export default updatedState;