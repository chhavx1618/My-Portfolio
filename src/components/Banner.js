import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web developer", "UI/UX Designer", "Web Designer"];
    const period = 2000;

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }, [isDeleting, loopNum, text]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker); };
    }, [delta, tick]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <div className="animate__animated animate__zoomIn">
                            <img src="spacecraft_270107.png" alt="Header Img" />
                        </div>
                    </Col>
                    <Col>
                        <div className="animate__animated animate__fadeIn">
                            <span className="tagline">Welcome to my Portfolio!</span>
                            <h1>{`Hello! I'm Chhavi`}</h1>
                            <h1><span className="txt-rotate" dataPeriod="10" data-rotate='[ "Web Developer", "UI/UX Designer", "Web Designer" ]'><span className="wrap">{text}</span></span></h1>
                            <p>I'm a second year B.Tech Computer Science Engineering student at Indian Institute of Information Technology, Vadodara. I'm dedicated to learning new skills and improving myself every single day.</p>
                            <button href="https://www.linkedin.com/in/chhavi-arora-b2483127a/" onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
