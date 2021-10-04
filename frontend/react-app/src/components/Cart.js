import store from '../redux/store';
import { useState } from 'react';
import Quantity from './Quantity';
import { addQuantity, removeQuantity, removeItem, setTime, addOrderNumber, setTotalPrice, saveToOrderHistory, incQuantity, saveToTotal, setOrderDate } from "../redux/actions/actions";
import { Link } from 'react-router-dom';
import shoppingbag from '../assets/svg/shoppingbag.svg'
import circle from '../assets/svg/circle.svg'
import graphicsheader from '../assets/svg/graphicsheader.svg'
import navicon from '../assets/svg/navicon.svg'
import arrowup from '../assets/svg/arrowup.svg'
import arrowdown from '../assets/svg/arrowdown.svg'
import newTriangle from '../assets/svg/newTriangle.svg'




function Cart(props) {
    const [order, setOrder] = useState(store.getState().items)
    const [currentQty, setCurrentQty] = useState();
    const [quantity, setQuantity] = useState(store.getState().quantity)
    const orderDate = new Date().toLocaleDateString();

    
   console.log(orderDate)
    

    const incQty = (orderItem) => {
        console.log(`qty was updated for ${orderItem.title}`)
        store.dispatch(addQuantity(orderItem))
        setCurrentQty(orderItem.quantity);
        store.dispatch(incQuantity(1))
        setQuantity(quantity + 1)
        console.log('updated state: ', store.getState());
    }

    const decQty = (orderItem, index) => {
        store.dispatch(incQuantity(-1))
        setQuantity(quantity - 1)
        if (orderItem.quantity > 1) {
            console.log(`qty was updated for ${orderItem.title}`)
            store.dispatch(removeQuantity(orderItem))
            console.log('updated state: ', store.getState());
            setCurrentQty(orderItem.quantity);
        } else {
            store.dispatch(removeQuantity(orderItem))
            setCurrentQty(orderItem.quantity);
            store.dispatch(removeItem(index));
            setOrder(store.getState().items)
            console.log(`${orderItem.title} peaced out`)
            console.log('updated state: ', store.getState());
        }
    }
    console.log(order)
    console.log(store.getState().items)

    let orderPrice = 0;
    for (let i = 0; i < order.length; i++) {
        orderPrice += order[i].price * order[i].quantity;
    }

    console.log(orderPrice);

    const newOrder = (time, ordernumber) => {
        store.dispatch(setTime(time))
        store.dispatch(setTotalPrice(orderPrice))
        store.dispatch(setOrderDate(orderDate))
        console.log(store.getState().newOrder.orderTime)
        if (!store.getState().orderNumbers.includes(ordernumber)) {
            store.dispatch(addOrderNumber(ordernumber))
        }
        store.dispatch(saveToOrderHistory(store.getState().newOrder))
        store.dispatch(saveToTotal(store.getState().newOrder.totalPrice))
    }
    

    return (
        <section id="cart" className={props.visibility}>
            <section className="overlay"></section>
            <header>
                <img alt="header" src={graphicsheader} />
            </header>
            <section className="navbuttons">
                <aside><img alt="burger menu button" src={navicon} id="burgerbutton" /></aside>
                <aside><Link to="/menu"><img alt="shopping cart button" src={shoppingbag} alt={'shopping bag'} className="shoppingcart in-cart" /><img alt="an orange circle" src={circle} className="circle in-cart" /><p className="qty in-cart">{quantity}</p>
                    <img alt="a triangle" src={newTriangle} id="triangle" /></Link>
                </aside>
            </section>
            <section className="open-cart">
                <h1 className="cart-header" >Din beställning</h1>
                <section className="cart-items-list">
                    {
                        order.map((orderItem, index) =>

                            <section key={index} className="cart-item">
                                <section className="cart-item-info">
                                    <section className="title">
                                        <h2>{orderItem.title}</h2>
                                        <aside className="dotted-line"></aside>
                                    </section>
                                    <p>{orderItem.price * orderItem.quantity} kr</p>
                                </section>
                                {<section className="inc-dec">
                                    <img alt="upwards arrow" src={arrowup} onClick={() => incQty(orderItem)} />
                                    <Quantity orderItem={orderItem} />
                                    <img alt="downwards arrow" src={arrowdown} onClick={() => decQty(orderItem, index)} />
                                </section>}
                            </section>
                        )
                    }</section>
                
                    <section className="total-section">
                        <section className="total-info">
                            <h2>Total</h2>
                            <p>inkl moms + drönarleverans</p>
                        </section>

                        <h2>{orderPrice} kr</h2>

                    </section>
                      {store.getState().newOrder.orderTime > 0 ? 
                      (
                        <section>
                            <p>Du har redan en pågående order! </p>
                            <p>Återkom gärna när den har levererats.</p>
                        </section>
                    )
                          
                    :  ( quantity === 0 ? (<section><h4>Lägg något i varukorgen </h4>
                    <h4>för att kunna beställa!</h4></section>) : 
                       
                        <Link to={{ pathname: '/status' }}><button className="buy-button" onClick={() => newOrder(Math.floor(Math.random() * (25 - 13) + 13), Math.floor(Math.random() * (1000000 - 100001) + 100001))}>Take my money!</button></Link>

                      
                      
                       )          
              

               }
            </section>


        </section>
    );
}

export default Cart;