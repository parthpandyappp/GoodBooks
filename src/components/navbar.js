import React, { Component } from 'react';

class NavBar extends Component {
    state = {}
    render() {
        const someStyle = { backgroundColor: "#EFF6FF", height: "76px" };
        return (
            <nav style={someStyle} className="navbar navbar-light">
                <div className="container-fluid">
                    <span style={{ fontSize: "24px" }}>
                        GoodBooks 📚
                    </span>
                    <span className="navbar-text ml-2"><a href="https://github.com/parthpandyappp/"><i class="fa fa-github" style={{ fontSize: 50 }}></i></a></span>
                </div>
                
            </nav>
        );
    }
}

export default NavBar;