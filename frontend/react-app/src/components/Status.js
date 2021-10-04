import drone from '../assets/svg/drone.svg'
import { useEffect, useState } from 'react';
import store from '../redux/store';
import { updateTime, resetList } from "../redux/actions/actions";
import { Link } from 'react-router-dom';


function Status() {
    const allTheOrders = store.getState().user.orderHistory;
    console.log(allTheOrders)
    const myOrderNumber = store.getState().newOrder.currentOrderNumber;
    console.log(store.getState().orderNumbers)
    const [minsLeft, setMinsLeft] = useState(store.getState().newOrder.orderTime);
    console.log(store.getState().newOrder)
    console.log(store.getState().newOrder.orderTime)
    console.log(minsLeft)
    

    useEffect(() => {
        const interval = setInterval(() => {
            store.dispatch(updateTime(1));
            setMinsLeft(store.getState().newOrder.orderTime)
            if (store.getState().newOrder.orderTime === 0) {
                clearInterval(interval);
            }
        }, 60000);
        return () => clearInterval(interval);
    }, []);
const saveOrder = () => {
        
        store.dispatch(resetList())
}


    return (
        <section className="status">
            {minsLeft > 0 ? (<><p>Ordernummer #{myOrderNumber}</p>
            <img alt="drone with coffee cup" src={drone}/>
            <h1>Din beställning är på väg</h1>
            <h3>{minsLeft} minuter</h3></>) : (<><img alt="drone with coffee cup" src={drone}/>
            <h1>Du har ingen pågående order. </h1></>) }
            <Link className="cool-button" to='/menu' onClick={saveOrder}><p className="cool-button-text">Ok, cool!</p></Link>
        </section>
    );
}

export default Status;