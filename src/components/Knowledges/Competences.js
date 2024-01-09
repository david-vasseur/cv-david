import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Competences extends Component {
    state = {
        relationnel: [
            {id: 1, value: "Communication", xp:7.5},
            {id: 2, value: "Leadership", xp:4},
            {id: 3, value: "Relations interpersonnelles", xp:3},
            {id: 4, value: "Négociation", xp:2.5},
            {id: 5, value: "Orientation client", xp:8},
        ],

        operationnel: [
            {id: 1, value: "Gestion d'équipe", xp:6.5},
            {id: 2, value: "Planification stratégique", xp:2},
            {id: 3, value: "Analyse des performances", xp:3},
            {id: 4, value: "Veille concurrentielle", xp:7},
        ]
    }

    render() {
        let {relationnel, operationnel} = this.state;

        return (
            <div className='relationnelOperationnel'>
                <ProgressBar 
                competence={relationnel}
                className="relationnelDisplay"
                title="compétences relationnelles"
                />
                <ProgressBar
                competence={operationnel}
                className="operationnelDisplay"
                title="compétences opérationnelles" 
                />                
            </div>
        );
    }
}

export default Competences;
