import graphicsheader from '../assets/svg/graphicsheader.svg'
import graphicsfooter from '../assets/svg/graphicsfooter.svg'
import navicon from '../assets/svg/navicon.svg'
import Navigation from './Navigation';
import close from '../assets/svg/close.svg'
import { useState } from 'react';
import founder from '../assets/svg/founder.png'




function About() {
  const [open, setOpen] = useState(false)

  const openNav = () => {
    setOpen(!open);

  }

  return (
    <section id="about-page" className={open ? "open" : null}>
      <header>
        <img alt="header" src={graphicsheader} />
      </header>
      <section className="navbuttons">
        <aside><img alt="burger menu button" onClick={openNav} src={open ? close : navicon} id="burgerbutton" /><Navigation /></aside>
      </section>
      <main className="about-text"> 
        <h1>Vårt kaffe</h1>
        <p className="about-ingress">
          Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, 
          grounds dripper, crema, strong whipped, variety extra iced id lungo 
          half and half mazagran. Pumpkin spice.
        </p>
        <p>      
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as 
          rich aftertaste, con panna milk black, arabica white rich beans single 
          shot extra affogato. So affogato macchiato sit extraction instant grinder
          seasonal organic, turkish single shot, single origin, and robusta strong 
          to go so dripper. Viennese froth, grounds caramelization skinny aromatic 
          cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait 
          flavour cultivar ut bar instant kopi-luwak.
        </p>
        <p>
          Roast id macchiato, single shot siphon mazagran milk fair trade est 
          aroma a half and half and, so, galão iced to go, whipped as cream cup 
          pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half 
          and half at, that, percolator macchiato trifecta and body as arabica 
          dripper. In galão black java milk sit trifecta, robusta, acerbic café 
          au lait instant shop latte. Seasonal bar shop filter aroma id, crema, 
          affogato viennese cultivar aftertaste, seasonal, percolator cream black, 
          galão flavour, milk aromatic turkish skinny crema.
        </p>
        <section className="founder">
          <img alt="founder eva cortado" src={founder}/>
          <h3>Eva Cortado</h3>
          <p>VD & grundare</p>
        </section>
      </main>
      <footer>
        <img alt="footer" src={graphicsfooter} />
      </footer>
    </section>
  );
}

export default About;