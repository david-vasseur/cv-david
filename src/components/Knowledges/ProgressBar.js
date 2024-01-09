import React from 'react';

const ProgressBar = (props) => {
    
    return (
        <div className='{props.className}'>
           <h3>{props.title}</h3>
                <div className='years'>
                    <span>Années d'expériences</span>
                    <span>4 ans</span>
                    <span>8 ans</span>
                </div>

            <div>

                {
                    props.competence.map((item) =>{
                    const xpYears = 8;
                    let ProgressBar = item.xp / xpYears * 100 + '%';

                    return (
                        <div key={item.id} className='competencesList'>
                            <li>{item.value}</li>
                            <div className='progressBar' style={{width:ProgressBar}}></div>
                        </div>
                    )

                    }) 
                }

            </div>

        </div>
    );
};

export default ProgressBar;