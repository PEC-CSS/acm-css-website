import React, {Component} from "react";
import { Col, Container, Row, Image, Button, Card, CardGroup } from "react-bootstrap";
import Select from 'react-select';
import { collection, getDocs } from "firebase/firestore";
import { branches, branch_info } from "./variables";
import "./branches.css";
import { fireStore } from "../../firebase/main";

class Branches extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latestEvents: [],
            currentBranch: "Open Source",
            currentBranchLogo: "https://firebasestorage.googleapis.com/v0/b/pec-acm-website.appspot.com/o/os.png?alt=media&token=0954f9f8-df45-41f4-94f8-9b4d3f511679",
            currentBranchInfo: "The Open Source Committee by PEC ACM is a community of technology enthusiasts dedicated to promoting the use of open-source software and fostering a culture of collaboration and innovation. The Open Source Committee aims to educate and inspire students to develop and contribute to open-source projects, as well as to encourage the use of open-source software in academic and industrial settings. The committee organizes various workshops, seminars, and hackathons to facilitate learning and hands-on experience with open-source technologies. Moreover, the committee also collaborates with other organizations to conduct joint events and initiatives. The Open Source Committee is an excellent platform for students interested in technology to network with like-minded individuals, gain practical experience, and make valuable contributions to the open-source community. By promoting the use of open-source software, the committee is playing a crucial role in advancing technology and enabling innovation."
        }
    }

    handleBranchChange = (selectedBranch) => {

        switch (selectedBranch.value){
            case "open-source":
                this.setState({
                    currentBranchInfo: branch_info[0].info,
                    currentBranchLogo: branch_info[0].logo
                });
                break;
            case "competitive-programming":
                this.setState({
                    currentBranchInfo: branch_info[1].info,
                    currentBranchLogo: branch_info[1].logo
                });
                break;
            case "machine-learning":
                this.setState({
                    currentBranchInfo: branch_info[2].info,
                    currentBranchLogo: branch_info[2].logo
                });
                break;
            case "web-&-app":
                this.setState({
                    currentBranchInfo: branch_info[3].info,
                    currentBranchLogo: branch_info[3].logo
                });
                break;
            case "cyber-security":
                this.setState({
                    currentBranchInfo: branch_info[4].info,
                    currentBranchLogo: branch_info[4].logo
                });
                break;
            case "publicity-&-design":
                this.setState({
                    currentBranchInfo: branch_info[5].info,
                    currentBranchLogo: branch_info[5].logo
                });
                break;
        }

        this.setState({ currentBranch: selectedBranch }, () =>
            console.log(`Option selected:`, selectedBranch)
        );
    };

    componentDidMount = async () => {
        const querySnapshot = await getDocs(collection(fireStore, "events"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }

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
                        <Col xs = {10} md = {8} style={{marginTop: 20}}>
                            <h2 className="branches_section_heading">
                                {this.state.currentBranch.label ? this.state.currentBranch.label: this.state.currentBranch}
                            </h2>
                            <div className="branches_section_content">
                                {this.state.currentBranchInfo}
                            </div>
                        </Col>
                        <Col xs = {10} md = {4} style={{marginTop: 20}}>
                            <Image height={300} width={300} src={this.state.currentBranchLogo} />
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row className = "justify-content-center">
                        <Col xs = {10} sm={12}>
                            <h2 className="branches_section_heading">
                                Latest from PEC ACM Student Chapter
                            </h2>
                        </Col>
                        <Col xs = {10} sm = {6} md = {4} style={{marginTop: "1rem"}}>
                            <Card className={'home_card card_2'}>
                                <Card.Img variant="top" src={this.state.currentBranchLogo} />
                                <div className='card_content_div'>
                                    <Card.Title style={{color: "white"}}>Card Title</Card.Title>
                                    <div className='card_content'>
                                        <div className='card_text'>
                                        Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                    consequatur.
                                            Crunching and getting our chapter's latest event details ... 
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xs = {10} sm = {6} md = {4} style={{marginTop: "1rem"}}>
                            <Card className={'home_card card_2'}>
                                <Card.Img variant="top" src={this.state.currentBranchLogo} />
                                <div className='card_content_div'>
                                    <Card.Title style={{color: "white"}}>Card Title</Card.Title>
                                    <div className='card_content'>
                                        <div className='card_text'>
                                        Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                    consequatur.
                                            Crunching and getting our chapter's latest event details ... 
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xs = {10} sm = {6} md = {4} style={{marginTop: "1rem"}}>
                            <Card className={'home_card card_2'}>
                                <Card.Img variant="top" src={this.state.currentBranchLogo} />
                                <div className='card_content_div'>
                                    <Card.Title style={{color: "white"}}>Card Title</Card.Title>
                                    <div className='card_content'>
                                        <div className='card_text'>
                                        Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                    consequatur.
                                            Crunching and getting our chapter's latest event details ... 
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