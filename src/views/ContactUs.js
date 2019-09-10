import React from 'react'
import FounderMessage from './FounderMessage';
import {

    Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Row,
    Table

} from 'reactstrap';
export default class ContactUS extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: 'white', marginTop: "6%" }}>
                <Row>

                    <Col xs="12" sm="6" lg="4" >
                        <Card>
                            <CardImg top width="100%" src="assets/img/founder.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>
                                    आकाश यादव राजा पिलखतर (<b>संस्थापक अध्यक्ष</b>) <br />
                                </CardTitle>
                                <CardSubtitle><FounderMessage buttonLabel="फाउंडर मैसेज" /></CardSubtitle>
                                {/* <CardText>)</CardText> */}

                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="8">
                        <div style={{ margin: '10%' }}>
                         
                            <Table borderless>
                                <tbody>
                                    <tr>
                                        <td><b>Address</b></td>
                                        <td>मां भगवती पैलेस, मैनपुरी रोड शिकोहाबाद जिला फिरोजाबाद, उत्तर प्रदेश</td>
                                    </tr>
                                    <tr>
                                        <td><b>Phone</b></td>
                                        <td>+91-9119790714,7300551106</td>
                                    </tr>
                                    <tr>
                                        <td><b>Email</b></td>
                                        <td style = {{color:'blue'}}>rkhs.skb@gmail.com </td>
                                    </tr>
                                </tbody>
                            </Table>

                        </div>

                    </Col>

                </Row >

            </div >

        )
    }
}