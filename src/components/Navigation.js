import React, { Component } from 'react';
import {Navbar,NavbarBrand,Container} from 'reactstrap';
import './createtask.css'

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
    }
    toggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
       
    }
    render() {
        return (
            <div>
              <Navbar color="dark" dark className="mb-5">
                    <Container>
                        <NavbarBrand href="/" className="m-3" id="brand">Bootcamp</NavbarBrand>
                    </Container>
              </Navbar>
                
            </div>
        );
    }
}

export default Navigation;