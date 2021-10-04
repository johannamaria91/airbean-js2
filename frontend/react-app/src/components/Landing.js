import airbeanlanding from '../assets/svg/airbeanlanding.svg';
import intrographicright from '../assets/svg/intrographicright.svg'
import intrographicleft from '../assets/svg/intrographicleft.svg'
import {useEffect, useState } from 'react'
import {Redirect} from 'react-router-dom'




function Landing() {
    const [timeToRedirect, setTimeToRedirect] = useState(false);

    useEffect(() => {
        const redirectMe = setTimeout(() => {
          setTimeToRedirect(true);
        }, 2000);
        return () => clearTimeout(redirectMe);
      }, []);
   

    return (
    <>
    <section className="landing-overlay">
                <img alt="logo" src={airbeanlanding}/>
            </section>
        <section className="landing">
            
            <img alt="background graphic left" src={intrographicleft}/>
           
           <img alt="background graphic right" src={intrographicright}/>
        </section>
        {timeToRedirect ? (<Redirect to='/menu' />) : null}
        </>
        
    );
}

export default Landing;