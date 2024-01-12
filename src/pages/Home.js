import React from 'react';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    
    const [motivationText, setMotivationText] = useState('');
    const text =
    "  Fort d'une expérience de 10 ans dans le domaine de la force de vente, j'ai appris les différentes méthodes et aspects du métier. Mes précédentes expériences m'ont également permis d'appréhender ce métier avec force. Mes principales qualités sont l'écoute, aussi bien du client que de ma hiérarchie, le contact humain, le dynamisme, le goût du défi, de la rigueur pour la négociation, et beaucoup d'empathie.";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setMotivationText((prevText) => prevText + text.charAt(index));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 50); 

    return () => clearInterval(interval); 
  }, []);

   
    return (
    
       
       
       <div className='home'>
            <Navigation />
            <div className='homeContent'>
                <div className='content'>
                    <h1>David Vasseur</h1>
                    <h2>Directeur Commercial</h2>
                        <div className='pdf'>
                            <a href="/media/Cv%20David.pdf" target='_blank' download>Télecharger mon CV
                            </a>
                        </div>
                        <div className='motivation'>
                            <p>{motivationText}</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Home;