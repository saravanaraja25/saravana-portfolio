import React from 'react'

function Contact() {
    return (
        <div data-aos="zoom-in-right" className="contact">
            <h1 className="page-title">Contact</h1>
            <div className="mt-5 content">
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="text-center c-card">
                            <i className="fas fa-phone"></i>
                            <h5>+91 8072443885</h5>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center c-card">
                            <i className="fas fa-envelope"></i>
                            <h5>saravanarajapp@gmail.com</h5>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center c-card">
                            <i className="fas fa-map-marker-alt"></i>
                            <h5>Sankari , Salem</h5>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center c-card">
                            <i className="fas fa-clock"></i>
                            <h5>9PM - 6PM(IST)</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
