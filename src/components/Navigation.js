import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className='Sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src={process.env.PUBLIC_URL + "/media/photo-self.jpg"} alt="profil pic" />
                    <h3>David VASSEUR</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact='true' to='/' activeClassName='navActive'>
                            <i>
                                <img src={process.env.PUBLIC_URL + "/media/maison.png"} alt="homeIcon" /> ACCUEIL
                            </i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact='true' to='/Knowledges' activeClassName='navActive'>
                            <i>
                                <img src={process.env.PUBLIC_URL + "/media/controle-de-liste.png"} alt="homeIcon" /> COMPETENCES
                            </i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact='true' to='/Experience' activeClassName='navActive'>
                            <i>
                                <img src={process.env.PUBLIC_URL + "/media/portfolio.png"} alt="homeIcon" /> EXPERIENCES
                            </i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact='true' to='/contact' activeClassName='navActive'>
                            <i>
                                <img src={process.env.PUBLIC_URL + "/media/enveloppe.png"} alt="homeIcon" /> CONTACT
                            </i>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialnetwork'>
                <ul>
                    <li>
                        <a href="https://www.facebook.com" target='_blank' rel='noopener noreferer' > 
                            <i><img src={process.env.PUBLIC_URL + "/media/facebook.png"} alt="facebook" />
                            </i> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target='_blank' rel='noopener noreferer' > 
                            <i><img src={process.env.PUBLIC_URL + "/media/instagram.png"} alt="facebook" />
                            </i> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferer' > 
                            <i><img src={process.env.PUBLIC_URL + "/media/linkedin.png"} alt="linkedin" />
                            </i> 
                        </a>
                    </li>
                </ul>
            </div>
            <div className='signature'>
                <p>P5Y4 @ 2024</p>
            </div>

        </div>
    );
};

export default Navigation;