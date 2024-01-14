import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import MapComponent from '../components/contact/MapComponent';
import MessageMe from '../components/contact/MessageMe';

const Contact = () => {
    let infos = [{number: '+33659127367',
                location: 'Estezargues',
                mail: 'p5y4@laposte.net',}]

    const [showMessageMe, setShowMessageMe] = useState(false);

    const handleShowMessageMe = () => {
        setShowMessageMe(true);
    };

    const handleCloseMessageMe = () => {
        setShowMessageMe(false);
      };

    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='contactBox'>
                    <h2>Me contacter</h2>
                    <MapComponent />
                    <h3 className='tel'>
                        <img className='imageIcon' src="./media/telephone.png" alt="" />  
                        {infos[0].number}</h3>
                    <h3 className='loc'>
                        <img className='imageIcon' src="./media/address.png" alt="" />  
                        {infos[0].location}</h3>
                    <h3 className='mail'>
                        <img className='imageIcon' src="./media/email.png" alt="" />  
                        {infos[0].mail}</h3>
                    <a className='BuntonClick' href="#" onClick={handleShowMessageMe}>ENVOYEZ MOI UN MESSAGE !</a>  
                    {showMessageMe && <MessageMe onClose={handleCloseMessageMe} />}  
                </div>
            </div>
        </div>
    );
};

export default Contact;