import email from './../assets/img/gmail.png';
import linkedin from './../assets/img/linkedin.png';
import github from './../assets/img/github.png'
//import githubIcon from './../assets/img/github.png'; // Update this with the actual path to your GitHub icon

export const Connect = () => {

    return (
        <section className="skill" id="skill">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Let's Connect</h2>
                            <div className="skill-grid">
                                <div className="item">
                                    <a href="mailto:chhavi.cw.1618@gmail.com">
                                        <img className='icon' src={email} alt="Gmail" />
                                        <h5>Email</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                                        <img className='icon' src={linkedin}  alt="LinkedIn" />
                                        <h5>LinkedIn</h5>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                                        <img className='icon' src={github} alt="GitHub" />
                                        <h5>GitHub</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
