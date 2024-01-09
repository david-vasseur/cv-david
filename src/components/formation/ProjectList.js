import React, { Component } from 'react';
import { experienceData } from '../../data/experienceData';
import Project from "./Project"

class ProjectList extends Component {
    state= {
        projects:experienceData
    }


    render() {

        let {projects} = this.state;


        return (
            <div className='experienceContent'>
                <div className='projects1'>
                    {
                        projects.map(item => {

                            return (
                                <Project
                                key={item.id}
                                item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;
