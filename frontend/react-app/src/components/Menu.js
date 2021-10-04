import MenuItems from './MenuItems';
import shoppingbag from '../assets/svg/shoppingbag.svg'
import circle from '../assets/svg/circle.svg'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import store from '../redux/store'
import { addItem, addQuantity, incQuantity, updateTime } from '../redux/actions/actions';
import graphicsheader from '../assets/svg/graphicsheader.svg'
import graphicsfooter from '../assets/svg/graphicsfooter.svg'
import navicon from '../assets/svg/navicon.svg'
import Navigation from './Navigation';
import close from '../assets/svg/close.svg'




function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [quantity, setQuantity] = useState(store.getState().quantity)
  const [open, setOpen] = useState(false)
  const [minsLeft, setMinsLeft] = useState(store.getState().newOrder.orderTime);



  //fetch mot local host 8080 i en useEffect()
  useEffect(() => {
    getAPI();

    const interval = setInterval(() => {
      store.dispatch(updateTime(1));
      setMinsLeft(store.getState().newOrder.orderTime)
      if (store.getState().newOrder.orderTime === 0) {
          clearInterval(interval);
      }
  }, 60000);
  return () => clearInterval(interval);
  
  }, []);
  

  const getAPI = async () => {
    const response = await fetch('http://localhost:8080/api/items');
    const data = await response.json();
    setMenuItems(data.items);
    console.log(data.items);
  }

  

  //onclick uppdatera redux med orderdata 

  const addToCart = (index) => {
    console.log(`hi from ${menuItems[index].title}`)
    let theIndex = store.getState().items.findIndex(item => item.id === menuItems[index].id)
    console.log(theIndex)
    if (theIndex == -1) {
        store.dispatch(addItem(menuItems[index]))
        store.dispatch(addQuantity(menuItems[index]))
        store.dispatch(incQuantity(1))
        setQuantity(quantity + 1)
        console.log('updated state: ', store.getState());
    }else {
      store.dispatch(addQuantity(menuItems[index]))
      store.dispatch(incQuantity(1))
      setQuantity(quantity + 1)
      console.log('updated state: ', store.getState());
    }

  }

  

  const openNav = () => {
    setOpen(!open);

  }

  return (
    <section id="menupage" className={open ? "open" : null}>
      <header>
        <img alt="header" src={graphicsheader} />
      </header>
      <section className="navbuttons">
        <aside><img alt="burger menu button" onClick={openNav} src={open ? close : navicon} id="burgerbutton" /><Navigation /></aside>
        <aside  ><Link to={{ pathname: '/cart' }}><img alt="shopping cart button" src={shoppingbag} alt={'shopping bag'} className="shoppingcart" />{store.getState().quantity > 0 ? (<><img alt="an orange circle"src={circle} className="circle" /><p className="qty">{quantity}</p></>): null}</Link></aside>

      </section>


      <h1>Meny</h1>
      {
        menuItems.map((item, index) => <MenuItems key={index} data={item} addToCart={() => addToCart(index)} />)
      }
      <footer>
        <img alt="footer" src={graphicsfooter} />

      </footer>
    </section>
  );
}


export default Menu;