import React, {Component} from "react";
import { Col, Container, Row, Image, Button, Card, CardGroup } from "react-bootstrap";
import Select from 'react-select';
import { branches } from "./variables";
import Pec_Acm_Css_Logo from "./logos/pec_acm_css_logo.jpg"
import "./branches.css";

class Branches extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentBranch: "Open Source"
        }
    }

    handleBranchChange = (selectedBranch) => {
        this.setState({ currentBranch: selectedBranch }, () =>
            console.log(`Option selected:`, selectedBranch)
        );
    };

    render(){
        return (
            <Container>
                <section>
                    <Row className = "justify-content-center" style={{marginTop: "2rem", marginBottom: "2rem"}}>
                        <Col xs = {10} sm = {5} md = {4}>
                            <h4 className="branches_section_heading">
                                {">> Nothing to commit, on branch"}
                            </h4>
                        </Col>
                        <Col xs = {10} sm = {5} md = {4}>
                            <Select
                                value={this.state.currentBranch}
                                onChange={this.handleBranchChange}
                                options={branches}
                            />  
                        </Col>
                    </Row>
                </section>
                <section className="branches_section"> 
                    <Row className = "justify-content-center">
                        <Col xs = {10} md = {8}>
                            <h2 className="branches_section_heading">
                                {this.state.currentBranch.label ? this.state.currentBranch.label: this.state.currentBranch}
                            </h2>
                            <div className="branches_section_content">
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                consequatur. Quis aute iure reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                obcaecat cupiditat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum.
                            </div>
                        </Col>
                        <Col xs = {10} md = {4}>
                            <Image src={Pec_Acm_Css_Logo} />
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row className = "justify-content-center">
                        <Col xs = {10} sm={12}>
                            <h2 className="branches_section_heading">
                                Latest from {this.state.currentBranch.label ? this.state.currentBranch.label : this.state.currentBranch}
                            </h2>
                        </Col>
                        <Col xs = {10} sm = {6} md = {4} style={{marginTop: "1rem"}}>
                            <Card className={'home_card card_1'}>
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
                        <Col xs = {10} sm = {6} md = {4} style={{marginTop: "1rem"}}>
                            <Card className={'home_card card_2'}>
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
                        <Col xs = {10} sm = {6} md = {4} style={{marginTop: "1rem"}}>
                            <Card className={'home_card card_3'}>
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
                </section>
                <section>
                    <Row className = "justify-content-center" style={{marginBottom: "6rem"}}>
                        <Col xs = {10} md = {4}>
                            <h2 className="branches_section_heading" style={{display:"flex", justifyContent: "center", alignItems: "center", height: "100%", marginTop: "2rem"}}>
                                Up Next
                            </h2>
                        </Col>
                        <Col xs = {10} sm = {6} md = {4} style={{marginTop: "6rem"}}>
                            <div style={{height: "100%", width: "100%", padding: 20, borderRadius: 20, borderwidth: 2, borderColor: "grey", borderStyle: "solid"}}>
                                <h3 className="branches_section_heading" style={{textAlign: "center"}}>
                                    Event Name
                                </h3>
                                <div className="branches_section_content" style={{margin: 20}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                    consequatur.
                                </div>
                                <h6 className="branches_section_heading text-muted" style={{textAlign: "center", textEmphasisStyle: "inherit"}}>
                                    starts on 25.04.23
                                </h6>
                                <Button color="primary" style={{width: "80%", marginTop: 20, marginBottom: 20}}>
                                    Register
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    }
}

export default Branches;