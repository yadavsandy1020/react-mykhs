import React, { Component, lazy, Suspense } from 'react';
import {

  Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, Badge,
  Row,
  Spinner

} from 'reactstrap';
import './Dashboard.css'
import MyCarousel from '../Gallery'
import FounderMessage from '../FounderMessage';
import OurTeam from '../OurTeam';
import './Dashboard.css'




class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center"><Spinner size="sm" color="primary" /></div>

  render() {

    return (
      <div className="animated fadeIn" style={{ marginTop: "1%" }}>


        <Row>


          <Col xs="12" sm="6" lg="9" style={{ overflowY: "auto" }}>
            <MyCarousel />
          </Col>
          <br />
          <Col xs="12" sm='6' lg="3">

            <div style={{ height: "445px", width: "100%", border: " 0.5px", borderStyle: "ridge" }}>
              <div className="box">
                Latest Notifications
              </div>
              <marquee width="100%" direction="up" height='80%' style={{ marginTop: "10%", padding: "10px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <Badge color="warning">
                  new
                    </Badge><br />
                Numquam similique est deleniti dicta .
                    <Badge color="warning">
                  new
                    </Badge>


              </marquee>
            </div>




          </Col>
        </Row>

        <Row>

        <b className="ourteam">Our Team</b>
        

        </Row>
        <Row>

          <OurTeam />

        </Row>


        <Row>
          <Col>

          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
