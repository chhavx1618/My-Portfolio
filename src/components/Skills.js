import 'react-multi-carousel/lib/styles.css';
import './../App.css'
import webdev from './../assets/img/code_1903572.png'
import ux from './../assets/img/wireframe_3596980.png'
import webdes from './../assets/img/design.png'
import mongo from './../assets/img/image.png'
import react from './../assets/img/react.png'
import node from './../assets/img/nodejs.png'


export const Skills = () => {
    return (
        <section className="skill" id="skill">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Here are some of the skills that I have been learning and growing in. Hope to expand this list further and further!</p>
                            <div className="skill-grid">
                                <div className="item">
                                    <img src={webdev} alt="Web Development" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={ux} alt="ux.ui" />
                                    <h5>UX/UI Design</h5>
                                </div>
                                <div className="item">
                                    <img src={webdes} />
                                    <h5>Web Design</h5>
                                </div>
                            </div>
                            <div>
                                <p>

                                </p>
                            </div>
                            <div className="skill-grid">
                                <div className="item">
                                    <img src={react} alt="react" />
                                    <h5>React Js</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="node" />
                                    <h5>Node Js</h5>
                                </div>
                                <div className="item">
                                    <img src={mongo}alt="MOngodb" />
                                    <h5>MongoDb</h5>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
