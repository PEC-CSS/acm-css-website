import React, { Component } from 'react';
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';
import ACM_Grps_Img from './img/acm_grps.png';
import Discord_Logo from './img/discord_logo.png';
import Facebook_Logo from './img/facebook_logo.png';
import Instagram_Logo from './img/instagram_logo.png';
import Linkedin_Logo from './img/linkedin_logo.png';
import Twitter_Logo from './img/twitter_logo.png';
import Youtube_Logo from './img/youtube_logo.png';

class Home extends Component {
    render() {
        return (
        <Container>
            <section className="home_section">
                <h2 className='home_section_heading'>A computer science community</h2>
                <div className='home_section_content text_content'>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                consequatur. Quis aute iure reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                obcaecat cupiditat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
                </div>
            </section>
            
            <section className="home_section">
                <h2 className='home_section_heading'>Our branches</h2>
                <div className='home_section_content'>
                    <div className='home_section_content_img'>
                        <Image src={ACM_Grps_Img} alt='ACM Groups' fluid/>
                    </div>
                    <div>
                        <Link to='/branches'>
                            <Button variant='primary' className='home_section_content_btn'>Learn more</Button>
                        </Link>
                    </div>

                </div>
            </section>

            <section className="home_section social_section">
                <Row>
                    <Col md={4}>
                        <Row>
                        <Col xs={9}>
                            <h2 className='home_section_heading'>Reach out to us at</h2>
                        </Col>
                        <Col xs={3}>
                            <div className='home_black_verticle_line'></div>
                        </Col>

                        </Row>
                        
                    </Col>
                    <Col md = {8}>
                        <Row>
                            <Col md={6} className="home_social_img_col">
                                <Row>
                                <Col xs={4}>
                                    <Link to='https://www.facebook.com/pecacm/' target='_blank'>
                                    <Image src={Facebook_Logo} alt='Facebook Logo' className = "home_social_img" fluid/>
                                    </Link>
                                </Col>
                                <Col xs={4}>
                                    <Link to='https://www.instagram.com/pecacm/' target='_blank'>
                                    <Image src={Instagram_Logo} alt='Instagram Logo' className = "home_social_img" fluid/>
                                    </Link>
                                </Col>
                                <Col xs={4}>
                                    <Link to='https://twitter.com/pec_acm' target='_blank'>
                                    <Image src={Twitter_Logo} alt='Twitter Logo' className = "home_social_img" fluid/>
                                    </Link>
                                </Col>

                                </Row>
                            </Col>

                            <Col md={6}>
                                <Row>
                                <Col xs={4}>
                                    <Link to='https://www.linkedin.com/company/pec-acm-student-chapter' target='_blank'>
                                    <Image src={Linkedin_Logo} alt='Linkedin Logo' className = "home_social_img" fluid/>
                                    </Link>
                                </Col>
                                <Col xs={4}>
                                    <Link to='https://discord.com/invite/DB6Zn8WwPk' target='_blank'>
                                    <Image src={Discord_Logo} alt='Discord Logo' className = "home_social_img" fluid/>
                                    </Link>
                                </Col>
                                <Col xs={4}>
                                    <Link to='https://www.youtube.com/channel/UC0gxqDmACQ4j4G4OVvyf5eQ' target='_blank'>
                                    <Image src={Youtube_Logo} alt='Youtube Logo' className = "home_social_img" fluid/>
                                    </Link>
                                </Col>

                                </Row>

                            </Col>
                            
                        </Row>

                    </Col>
                </Row>
            </section>

            <section className="home_section">
                <h2 className='home_section_heading'>Trending</h2>
                <div className='home_section_content'>
                    <Row>
                        <Col md={4}>
                            <Card className='home_card card_1'>
                                <div className='card_content'>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                consequatur.
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className='home_card card_2'>
                            <div className='card_content'>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                consequatur.
                            </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className='home_card card_3'>
                            <div className='card_content'>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                consequatur.
                            </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        </Container>
        );
    }
    }
export default Home;