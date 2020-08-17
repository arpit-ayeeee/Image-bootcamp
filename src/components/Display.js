import React, {Component} from 'react';
import { Container,Row, Col} from 'reactstrap';
import './display.css';

class Display extends Component{
    

    render(){
        var masterData = localStorage.getItem('masterData');
        let list = masterData ? JSON.parse(masterData) : [];
        const image =  list.map(item => {
                return(
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <h4>Name: {item.name}</h4>
                            </div>
                            <div className="col-4">
                                <h4>Description: {item.description}</h4>
                            </div>
                            <div className="col-6">
                                <h4>Notes: {item.notes}</h4>
                            </div>
                        </div>
                    </div>
                )
            });

        return(
            <div>
                <Container className="back">
                    <Row>
                        <Col>
                            {image}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Display;