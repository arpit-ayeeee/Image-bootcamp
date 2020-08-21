import React , { Component } from 'react';
import {Link} from '@reach/router';
import {Button} from 'reactstrap';
import './main.css';

class Main extends Component{
    render(){
        return(
            <div className="container">
                <div className="row" id="mainrow">
                    <div className="col-2 col-sm-4">
                    </div>
                    <div className="col-8 col-sm-4">
                        <div className="button-big">
                            <Button id="btn">
                                <Link to="/createtask" className="links font-weight-bold">ADD IMAGE</Link>
                            </Button>
                            <br />
                            <Button id="btn">
                                <Link to="/scoretask" className="links font-weight-bold">RATE IMAGE</Link>
                            </Button>
                            <Button id="btn">
                                <Link to="/display" className="links font-weight-bold">FEEDS</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="col-2 col-sm-4">
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;