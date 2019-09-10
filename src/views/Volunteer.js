import React from 'react';
import { Table,Container, Row, Col } from 'reactstrap';

export default class Volunteer extends React.Component {
    render() {
        return (
                <Row>
                   
                    <Col xs="12" sm='12' lg="10" style={{marginTop:"2%"}}>
                    <h3 style={{color:"black", marginTop:"0.5%", textAlign:"center",display:"flex",justifyContent:"center"}}>Our Members</h3><br/>
                        <Table hover borderless  >
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Joined</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Monu Chaudhari</td>
                                    <td>City Volunteer</td>
                                    <td>21/02/2016</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                    <td>Abhishek Sharma</td>
                                    <td>City Volunteer</td>
                                    <td>26/03/2015</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                    <td>Gaurav Yadav</td>
                                    <td>City Volunteer</td>
                                    <td>12/02/2018</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Monu Chaudhari</td>
                                    <td>City Volunteer</td>
                                    <td>21/02/2016</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                    <td>Abhishek Sharma</td>
                                    <td>City Volunteer</td>
                                    <td>26/03/2015</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                    <td>Gaurav Yadav</td>
                                    <td>City Volunteer</td>
                                    <td>12/02/2018</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Monu Chaudhari</td>
                                    <td>City Volunteer</td>
                                    <td>21/02/2016</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                    <td>Abhishek Sharma</td>
                                    <td>City Volunteer</td>
                                    <td>26/03/2015</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                    <td>Gaurav Yadav</td>
                                    <td>City Volunteer</td>
                                    <td>12/02/2018</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Monu Chaudhari</td>
                                    <td>City Volunteer</td>
                                    <td>21/02/2016</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                    <td>Abhishek Sharma</td>
                                    <td>City Volunteer</td>
                                    <td>26/03/2015</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                    <td>Gaurav Yadav</td>
                                    <td>City Volunteer</td>
                                    <td>12/02/2018</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Monu Chaudhari</td>
                                    <td>City Volunteer</td>
                                    <td>21/02/2016</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                    <td>Abhishek Sharma</td>
                                    <td>City Volunteer</td>
                                    <td>26/03/2015</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                    <td>Gaurav Yadav</td>
                                    <td>City Volunteer</td>
                                    <td>12/02/2018</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs="12" sm='6' lg="1">

                    </Col>
                </Row>
          

        );
    }
}