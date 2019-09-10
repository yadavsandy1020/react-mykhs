import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import './Dashboard/Dashboard.css'

export default class JoinUs extends React.Component {
    render() {
        return (

            <Container>
            <div style={{color:"black", marginTop:"2%", textAlign:"center",display:"flex",justifyContent:"center"}}> Register Here</div><br/>
                <Row style= {{marginTop:'0.5%'}}>
                    <Col xs="12" sm='6' lg="2">

                    </Col>
                    <Col xs="12" sm='6' lg="8" style={{}}>
                        
                        <Form style={{padding:"px", marginTop:"0.5%"}}>
                            <FormGroup>
                                <Label for="name">Full Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="gender">Gender</Label>
                                <Input type="select" name="gender" id="gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="dob">Date Of Birth</Label>
                                <Input
                                    type="date"
                                    name="dob"
                                    id="dob"
                                    placeholder="Enter your date of birth"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">Mobile No.</Label>
                                <Input
                                    type="text"
                                    name="number"
                                    id="phone"
                                    placeholder="Mobile Number"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email Address"
                                />
                            </FormGroup>
                            
                           
                            <FormGroup>
                                <Label for="reason">Why you want to join us</Label>
                                <Input type="textarea" name="reason" id="reason" />
                            </FormGroup>

                            <Button color="primary" size="lg" block>Submit</Button>

                        </Form>
                    </Col>
                    <Col xs="12" sm='6' lg="2">
                    </Col>
                </Row>

            </Container>

        );
    }
}