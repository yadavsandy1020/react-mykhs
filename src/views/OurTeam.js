import React from 'react';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, Col, Row
} from 'reactstrap';


import FounderMessage from './FounderMessage';

export default class OurTeam extends React.Component {
    render() {
        return (
            <Row>


                <Col xs="12" sm='6' lg="3">
                    <Card>
                        <CardImg top width="100%" src="assets/img/founder.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>
                                आकाश यादव राजा पिलखतर
                  (संस्थापक अध्यक्ष) <br />
                            </CardTitle>
                            <CardSubtitle><FounderMessage buttonLabel="फाउंडर मैसेज" /></CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm='6' lg="3">
                    <Card>
                        <CardImg top width="100%" src="assets/img/team1.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>
                            आशीष यादव <br />
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm='6' lg="3">
                    <Card>
                        <CardImg top width="100%" src="assets/img/team2.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>मुकेश यादव <br />
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm='6' lg="3">
                    <Card>
                        <CardImg top width="100%" src="assets/img/team3.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>
                            सुबोध कांत <br />
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>



            </Row>
        )
    }
}
