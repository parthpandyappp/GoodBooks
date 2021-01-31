import React, { Component } from 'react';

class Footer extends Component {
    
    currentDate() {
        return new Date().getFullYear();
    }
    
    render() {
        const someStyle = {
            marginTop: "40px", marginLeft: "100px", marginRight: "100px",
        }
        return (
            <div className="container">
                <hr style={someStyle} />

                <p className="text-center" style={{ fontFamily: "Roboto Mono", lineHeight: 0.5 }}>Copyright ©️ {this.currentDate()} Parth Pandya </p>

                <p className="text-center" style={{ fontFamily: "Roboto Mono", fontSize: 10, lineHeight: 0.5 }}>Some rights reserved.</p>
            </div>
        );
    }
}

export default Footer;
