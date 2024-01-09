import React, { Component } from 'react';

class Project extends Component {
    state= {
        showInfo: false
    }

    handleInfo =() => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }


    render() {
        let {name, location, job, logo, positionTitle, date, site} = this.props.item;
        
        return (
            <div className='projects'>
                <div className='date'>
                    <h3>{date}</h3>
                </div>
                    <div className='poste'>
                        <h2>{job}</h2>
                    </div>
                        <div className='image'>
                            <a href={site}>
                            <img className='img' src={process.env.PUBLIC_URL + {logo}} alt=""/></a>
                        </div>
                        <div className='icon'>
                            <img src={process.env.PUBLIC_URL + "/media/add.png"} alt="" onClick={this.handleInfo}/>
                        </div>
              {
                 <div className={`showInfos ${this.state.showInfo ? 'show' : ''}`}>
                        <div className='infosContent'>
                            <div className='head'>
                                <h2>{name} à {location}</h2>
                            </div>
                                    <div className='infos'>
                                        <p>{positionTitle}</p>
                                    </div>
                                        <div className='bouton'>
                                            <button className='close' onClick={this.handleInfo}>Fermer</button>
                                        </div>
                        </div>
                    </div>
                }      
            </div>
        );
    }
}

export default Project;
