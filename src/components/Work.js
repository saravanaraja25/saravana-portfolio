import React from 'react'
import ecom from '../img/ecom.jpg'
import kec from '../img/kec.png'
import covid from '../img/covid.png'
import weather from '../img/weatherapp.png'
import git from '../img/gitviewer.png'

function Work() {
    return (
        <div data-aos="fade-up" className="work">
            <h1 className="page-title">Works</h1>
            <div className="mt-5 content">
                <div className="row mt-5">                    
                    <div className="col-lg-6">
                        <div className="text-center c-card">
                            <img src={kec} alt="kec"/>
                            <div class="c-content">
                                <h4>Kongu Engineering College - Dept of CT-PG</h4>
                                <p>Tech Stack : ReactJS , Firebase</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/saravanaraja25/kec-msc-react-v2"><i className="fab fa-github"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://kongumscsoftwaresystems.in"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center c-card">
                            <img src={covid} alt="covid"/>
                            <div class="c-content">
                                <h4>Covid Tracker - India</h4>
                                <p>Tech Stack : ReactJS</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/saravanaraja25/covid-tracker-react"><i className="fab fa-github"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center c-card">
                            <img src={ecom} alt="B2B"/>
                            <div class="c-content">
                                <h4>E-Commerce Application</h4>
                                <p>Tech Stack : Laravel</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/saravanaraja25/b2becom-laravel7"><i className="fab fa-github"></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center c-card">
                            <img src={git} alt="git"/>
                            <div class="c-content">
                                <h4>Github User Finder</h4>
                                <p>Tech Stack : React JS</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/saravanaraja25/github-finder"><i className="fab fa-github"></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center c-card">
                            <img src={weather} alt="weather"/>
                            <div class="c-content">
                                <h4>Weather Finder</h4>
                                <p>Tech Stack : VueJS</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/saravanaraja25/weather-app-vue"><i className="fab fa-github"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://vue-weatherapp-saravana-raja.netlify.app"><i className="fas fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center c-card">
                            <img src="https://meterpreter.org/wp-content/uploads/2018/09/flutter-720x340.png" alt="calc"/>
                            <div class="c-content">
                                <h4>Calculator</h4>
                                <p>Tech Stack : Flutter</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/saravanaraja25/calculator"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center c-card">
                            <img src="https://miro.medium.com/max/3840/1*QDQvlCg420lzRElCK4AYhw.png" alt="calc"/>
                            <div class="c-content">
                                <h4>Quiz App</h4>
                                <p>Tech Stack : React Native</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/saravanaraja25/quiz-app-react-native"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
