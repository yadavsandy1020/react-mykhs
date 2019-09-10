import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './Dashboard/Dashboard.css'

export default class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <h2 className = "ourteam"> About us</h2>
                <Nav tabs>
                    <NavItem  >
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}

                        >
                            Who we are?
                         </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Our Mission
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <p className="about">
                                    Royal krishna helping society is a social service organization working towards a better society. True to its name, Royal Krishna helping society perseveres to bring in a positive change by uniting people who share the common vision of a developed India, and pay back to the society which helped us. A Social Non Government Organization engaged in social welfare activities aimed at alleviation of human suffering and all-round amelioration of society especially for the poor, helpless&nbsp; weaker sections. A Vision of Developed India Royal krishna helping society vision is directed at realizing the dream of a self sufficient and self reliant India, which has achieved remarkable progress in all the areas that define human achievement.
                                </p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <p className="about"> Our mission is to aid a non-violent and peaceful cooperative action, directly as well as through networks and to create, replicate and set in motion structures and systems which provide to the needs of poor and underprivileged so as to eradicate exploitation and provide opportunities for maximum growth. All big missions have humble beginnings and so is Royal krishna helping society is endeavor. Our mission is to address issues like poverty and ignorance that are threatening and weakening our country’s progress. Our Aim We aim to achieve literacy, eradicate poverty, abolish child labour, uplift and instill confidence among the weaker sections of the society.Our NGO services focus on assessing individual strengths and needs, setting personal goals and providing an environment that encourages overall growth and development.</p>

                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}