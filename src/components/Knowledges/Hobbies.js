import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Centres d'intérets</h3>
            <ul>
                <li className='hobby'>
                    <i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/hiking.png"} alt="" />Randonnée
                    </i>
                </li>
                <li className='hobby'>
                    <i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/football-player-attempting-to-kick-ball.png"} alt="" />Football
                    </i>
                </li>
                <li className='hobby'>
                    <i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/3d.png"} alt="" />Création 3D
                    </i>
                </li>
                <li className='hobby'>
                    <i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/tennis-player-with-racket.png"} alt="" />Tennis
                    </i>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;