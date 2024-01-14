import React from 'react';
import Navigation from '../components/Navigation';
import Formation from '../components/Knowledges/Formation';
import Competences from '../components/Knowledges/Competences';
import OtherSkills from '../components/Knowledges/OtherSkills';
import Hobbies from '../components/Knowledges/Hobbies';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navigation />
            <div className='knowledgesContent'>
                <Competences />
                <Formation />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;