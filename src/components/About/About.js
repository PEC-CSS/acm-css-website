import React, { Component } from 'react';
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap';
import './about.css';
import img1 from './img/img1.jpg'

class About extends Component {
    render() {
        return (
            <Container>
                <section className="about_section" id='left'>
                    <h2 className='about_section_heading'>Who are we?</h2>
                    <Row className='about_section_content'>
                        <Col className='text_content'>
                        The Association for Computing Machinery (ACM) is an international learned society for computing. It was founded in 1947 and is the world’s largest scientific and educational computing society. The ACM is an umbrella organization for academic and scholarly interests in computer science. PEC ACM CSS is a community of learners and leaders who teach each other to supplement the development of the members’ college education, specifically with regards to Computer Science. The vision of PEC ACM is to provide students exposure to the wide array of topics that fall under the umbrella of the field of computer science.
                        </Col>
                        <Col className='about_section_content_img' >
                            <Image src={img1} alt='ACM Groups' fluid />
                        </Col>
                    </Row>

                </section>
                <section className="about_section" id='right'>
                    <h2 className='about_section_heading'>How we operate?</h2>
                    <Row className='about_section_content'>
                        <Col className='about_section_content_img' >
                            <Image src={img1} alt='ACM Groups' fluid />
                        </Col>
                        <Col className='text_content'>
                            Lorem ipsum dolor sit amet, consectetur adipisci elit,
                            sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrum exercitationem ullam
                            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur. Quis aute iure reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            obcaecat cupiditat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Col>
                    </Row>
                </section>
                <section className="about_section" id='left'>
                    <h2 className='about_section_heading'>Our mission</h2>
                    <Row className='about_section_content'>
                        <Col className='text_content'>
                            Lorem ipsum dolor sit amet, consectetur adipisci elit,
                            sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrum exercitationem ullam
                            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur. Quis aute iure reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            obcaecat cupiditat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Col>
                        <Col className='about_section_content_img' >
                            <Image src={img1} alt='ACM Groups' fluid />
                        </Col>
                    </Row>
                </section>
                <section className="about_section" id='right'>
                    <h2 className='about_section_heading'>Our Vision?</h2>
                    <Row className='about_section_content'>
                        <Col className='about_section_content_img' >
                            <Image src={img1} alt='ACM Groups' fluid />
                        </Col>
                        <Col className='text_content'>
                            Lorem ipsum dolor sit amet, consectetur adipisci elit,
                            sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrum exercitationem ullam
                            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur. Quis aute iure reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            obcaecat cupiditat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Col>
                    </Row>
                </section>

            </Container>
        );
    }
}
export default About;