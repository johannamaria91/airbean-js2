import add2 from '../assets/svg/add2.svg';


function MenuItems(props) {

    return (
        <section className="menu-list-item">

            <aside><img alt="add button" src={add2} alt={'add button'} onClick={props.addToCart} /></aside>
            <section className="title-and-desc">
                <section className="title">
                <h2>{props.data.title}</h2>
                <aside className="dotted-line"></aside>
                </section>
                <p>{props.data.desc}</p>
            </section>
            <h2 className="menu-price">{props.data.price} kr</h2>
        </section>
    );
}

export default MenuItems;