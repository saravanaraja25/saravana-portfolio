import React from 'react'
import Typewriter from "typewriter-effect";

function Home() {
    return (
        <div data-aos="fade-down" className="home">
            <div className="row">
                <div className="col-12">
                    <h1>
                        Hey! I'm Saravana Raja
                    </h1>
                    <h3>
                        <Typewriter
                            options={{
                                loop: true,
                              }}
                            onInit={(typewriter)=> {
                                typewriter                        
                                .typeString("Full Stack Developer")
                                .deleteAll()
                                .typeString("Freelancer")
                                .deleteAll()                               
                                .start();
                            }}
                        />
                    </h3>
                    <div className="mt-5">
                        <a target="_blank" rel="noreferrer" className="resume text-white font-weight-bold" href="https://drive.google.com/file/d/1KrSvwjMYC32W3chIQ4Hma2Y7LZzt2Ugp/view">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
