//import CreateAccount from './CreateAccount'
import store from "../redux/store";
import { logIn, updateTime } from "../redux/actions/actions";
import { useEffect, useState } from 'react';
import graphicsheader from '../assets/svg/graphicsheader.svg'
import navicon from '../assets/svg/navicon.svg'
import close from '../assets/svg/close.svg'
import Navigation from './Navigation'
import icon from '../assets/svg/icon.svg'
import profile from '../assets/svg/profile.svg'





function Profile() {
    const [showForm, setShowForm] = useState(store.getState().loggedIn)
    const [fullName, setFullName] = useState(store.getState().user.name)
    const [emailAddress, setEmailAddress] = useState('')
    const user = store.getState().user;
    const [open, setOpen] = useState(false)
    const [totalPrice, setTotalPrice] = useState(store.getState().user.total)
    const [errorText, setErrorText] = useState('')
    const [minsLeft, setMinsLeft] = useState(store.getState().newOrder.orderTime);
    const [isDisabled, setIsDisabled] = useState(true)
    

    console.log(fullName, emailAddress)

    console.log(user)
    const changeName = (e) => {
        setFullName(e.target.value)
        
    }

    const changeEmail = (e) => {
        setEmailAddress(e.target.value)
       
    }

    const enable = (e) => {
        setIsDisabled(false)
    }
    

    const logMeIn = () => {
        store.dispatch(logIn(true, fullName, emailAddress))

        console.log(store.getState().loggedIn)
        setShowForm(!showForm)
        if (user.orderHistory.length === 0){
            setErrorText('Du har inte köpt något än')
        }
    }

    const openNav = () => {
        setOpen(!open);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            store.dispatch(updateTime(1));
            setMinsLeft(store.getState().newOrder.orderTime)
            if (store.getState().newOrder.orderTime < 0) {
                clearInterval(interval);
            }
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    

    return (
        <section id="profile" className={open ? "open" : null}>
            <header>
                <img alt="header" src={graphicsheader} />
            </header>
            <section className="navbuttons">
                <aside><img alt="burger menu button" onClick={openNav} src={open ? close : navicon} id="burgerbutton" /><Navigation /></aside>

            </section>
            <section id="create-account" className={showForm ? "hidden" : null}>
                <section className="create-account-top">
                    <img alt="little drone icon" src={icon} />
                    <h1 className="create-account-header">Välkommen till AirBean-familjen!</h1>
                    <h4>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</h4>
                </section>
                <section className="create-account-form">
                    <label>
                        <p>Namn</p>
                        <input onChange={changeName} type="text"></input>
                    </label>
                    <label>
                        <p>Epost</p>
                        <input onChange={changeEmail} type="text"></input>
                    </label>
                    <label className="gdpr-checkbox">
                        <input type="radio" id="radiobtn" onChange={enable}></input>
                        <p>GDPR Ok!</p>
                    </label>
                </section>

                <button id="login-btn" className="buy-button" onClick={logMeIn} disabled={isDisabled}>Brew me a cup!</button>
            </section>
            <section id="account-profile" className={showForm ? null : "hidden"}>
                <section className="account-info">
                    <img alt="profile" src={profile} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </section>
                <section className="account-orders">
                    <h3>Orderhistorik</h3>
                    <p className="order-history-left">{errorText}</p>
                    {user.orderHistory.map((order, index) =>
                        <section className="order-history" key={index}>
                            <section className="order-history-left">
                                <p>{order.currentOrderNumber}</p>
                                <p>total ordersumma</p>
                            </section>
                            <section className="order-history-right">
                                <p>{order.orderDate.substring(2,4)}/{order.orderDate.substring(5,7)}/{order.orderDate.substring(8,10)}</p>
                                <p>{order.totalPrice} kr</p>
                            </section>
                        </section>
                    )}
                </section>
                <section className="account-total">
                    <p>Totalt spenderat</p>
                    <p>{totalPrice} kr</p>
                </section>
            </section>
        </section>
    );
}

export default Profile;