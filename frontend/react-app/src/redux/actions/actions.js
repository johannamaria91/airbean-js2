import { ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, REMOVE_QUANTITY, SET_TIME, UPDATE_TIME, ADD_ORDER_NUMBER, LOG_IN, SET_TOTAL_PRICE, SAVE_TO_ORDER_HISTORY, INC_QUANTITY, SAVE_TO_TOTAL_PRICE, RESET, SET_ORDER_DATE } from './actionTypes';

const addItem = (item) => ({
    type: ADD_ITEM,
    info: 'added item',
    payload: item
})

//remove item 
const removeItem = (index) => ({
    type: REMOVE_ITEM,
    info: 'removed item',
    payload: index
})
//quantity
const addQuantity = (item) => ({
    type: ADD_QUANTITY,
    info: 'one more of those',
    payload: item
})

//remove quantity 
const removeQuantity = (item) => ({
    type: REMOVE_QUANTITY,
    info: 'one less of those',
    payload: item
})

//set time left until order arrives
const setTime = (time) => ({
    type: SET_TIME,
    info: 'time left',
    payload: time
})

//update time left until order arrives
const updateTime = (time) => ({
    type: UPDATE_TIME,
    info: 'time left',
    payload: time
})

//add ordernumber 
const addOrderNumber = (ordernumber) => ({
    type: ADD_ORDER_NUMBER,
    info: 'time of order',
    payload: ordernumber
})

//add total price 
const setTotalPrice = (totalPrice) => ({
    type: SET_TOTAL_PRICE,
    info: 'total price',
    payload: totalPrice
})

//log in
const logIn = (login, name, email) => ({
    type: LOG_IN,
    info: 'log in user',
    payload: login, 
    payloadtwo: name, 
    payloadthree: email
})

//save to order history
const saveToOrderHistory = (anOrder) => ({
    type: SAVE_TO_ORDER_HISTORY,
    info: 'save to order history',
    payload: anOrder
})

//inc quantity count
const incQuantity = (number) => ({
    type: INC_QUANTITY,
    info: 'save to order history',
    payload: number
})

//add price to total price 
const saveToTotal = (price) => ({
    type: SAVE_TO_TOTAL_PRICE,
    info: 'save to total price',
    payload: price
})

const resetList = () => ({
    type: RESET,
    info: 'reset',
})
const setOrderDate = (orderDate) => ({
    type: SET_ORDER_DATE,
    info: 'set order date',
    payload: orderDate
})

export  {addItem, removeItem, addQuantity, removeQuantity, setTime, updateTime, addOrderNumber, logIn, setTotalPrice, saveToOrderHistory, incQuantity, saveToTotal, resetList, setOrderDate}