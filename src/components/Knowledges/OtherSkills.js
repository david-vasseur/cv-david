import React from 'react';

const OtherSkills = () => {
    return (
        <div className='otherSkills'>
            <h3>Autres compétences</h3>
            <div className='list'>
                <ul className='liste-1'>
                    <li><i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/commentaire-alt-check.png"} alt="" /> Word
                        </i></li>
                        <li><i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/commentaire-alt-check.png"} alt="" /> Excell
                        </i></li>
                        <li><i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/commentaire-alt-check.png"} alt="" /> Powerpoint
                        </i></li>
                        <li><i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/commentaire-alt-check.png"} alt="" /> Github
                        </i></li>                          
                </ul>
                <ul className='liste-2'>
                    <li><i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/commentaire-alt-check.png"} alt="" /> Blender
                        </i></li>
                        <li><i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/commentaire-alt-check.png"} alt="" /> Html
                        </i></li>
                        <li><i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/commentaire-alt-check.png"} alt="" /> Css
                        </i></li>
                        <li><i>
                        <img className='imageIcon' src={process.env.PUBLIC_URL + "/media/commentaire-alt-check.png"} alt="" /> JavaScript
                        </i></li>                          
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;