import { Row, Col, Card } from "react-bootstrap";
import GithubChart from "../../components/GithubChart/GithubChart";
import Calendar from "../../components/Calendar/Calendar";

import "./styles.scss";

const Events = () => {
    return (
        <div className="events">
            <GithubChart />
            <Calendar />
            <hr />
            <div className="events__completed">
                <h1>Completed Events</h1>
                <Row>
                    <Col md={4}>
                        <Card className='home_card card_1'>
                            <div className='card_content_div'>
                                <div className='card_content'>
                                    <div className="card_heading">
                                        <h4>Placeholder card</h4>
                                    </div>
                                    <div className='card_text'>
                                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                                        sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrum exercitationem ullam
                                        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                        consequatur.
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='home_card card_2'>
                            <div className='card_content_div'>
                                <div className='card_content'>
                                    <div className="card_heading">
                                        <h4>Placeholder card</h4>
                                    </div>
                                    <div className='card_text'>
                                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                                        sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrum exercitationem ullam
                                        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                        consequatur.
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='home_card card_3'>
                            <div className='card_content_div'>
                                <div className='card_content'>
                                    <div className="card_heading">
                                        <h4>Placeholder card</h4>
                                    </div>
                                    <div className='card_text'>
                                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                                        sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrum exercitationem ullam
                                        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                        consequatur.
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Events;