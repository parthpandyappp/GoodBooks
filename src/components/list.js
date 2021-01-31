import React, { Component } from 'react';
import Books from './data.js'

class List extends Component {
    constructor() {
        super()
        this.handleGenreCpp = this.handleGenreCpp.bind(this)
    }

    state = {
        BookData: Books,
        temp: [],
    }


    handleGenreCpp(id) {
        // const temp = this.state.BookData.map(details => <Show key={details.id} det={details} />)
        // this.setState(
        //     {temp:temp})
        for (const item of this.state.BookData) {
            // console.log(item.id)
            if (item.id === id) {
                this.setState({ temp: item.name })
            }
        }
    }

    render() {
        const someStyle = {
            fontFamily: "Rubik",
            textAlign: "justify",
            backgroundColor: "lightgrey",
            // width: "300px",
            border: "15px solid #6B7280",
            padding: "50px",
            margin: "20px",
        }
        return (
            <div className="container text-center">
                <div className="row">
                    <div style={someStyle} className="m-4 mx-auto">
                        <p>Heyya 👋   This is a React front-end model developed by me as a part of React learning where it can be seen how different components are distinguished and get updated without refreshing the page as a whole😎. Only a part of the page i.e. a particular Component get's updated.✔️ However, the approach used in this project is too manual, hardcoded and simple without using any advanced React hooks. The future projects will involve them too!<br /><br />
                            Click🖱️ on the genre to get started with the top three books of all time 🥳</p>
                    </div>
                    <div className="w-50 m-3 mx-auto">
                        <button onClick={() => this.handleGenreCpp(1)} className="btn btn-primary m-2">C++</button>
                        <button onClick={() => this.handleGenreCpp(2)} className="btn btn-primary m-2">Javascript</button>
                        <button onClick={() => this.handleGenreCpp(3)} className="btn btn-primary m-2">c#</button>
                        <button onClick={() => this.handleGenreCpp(4)} className="btn btn-primary m-2">Python</button>
                        <button onClick={() => this.handleGenreCpp(5)} className="btn btn-primary m-2">Novel</button>
                        <button onClick={() => this.handleGenreCpp(6)} className="btn btn-primary m-2">Mystery</button>
                        <h3 className="m-3" >{this.state.temp.map(det => <div><p className="btn btn btn-outline-dark">{det}</p></div>)}</h3>
                    </div>
                </div>
            </div>
        );
    }

}

export default List;