import React from 'react'
import {ProgressBar} from 'react-bootstrap'

const Skills = () => {
    return (
        <div data-aos="fade-left" className="skills">
            <h1 className="page-title">Skills</h1>
            <div className="mt-5 content">
                <h4 className="mt-4">HTML</h4>
                <ProgressBar  now={90} label="90%" />
                <h4 className="mt-4">CSS/SASS</h4>
                <ProgressBar now={80} label="80%" />
                <h4 className="mt-4">JavaScript</h4>
                <ProgressBar now={85} label="85%" />
                <h4 className="mt-4">PHP</h4>
                <ProgressBar now={75} label="75%" />
                <h4 className="mt-4">React Js</h4>
                <ProgressBar now={85} label="85%" />
                <h4 className="mt-4">Laravel</h4>
                <ProgressBar now={80} label="80%" />
                <h4 className="mt-4">Wordpress</h4>
                <ProgressBar now={80} label="80%" />
            </div>
        </div>
    )
}

export default Skills
