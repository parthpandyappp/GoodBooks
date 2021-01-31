import React, { Component } from 'react';
import NavBar from './components/navbar.js'
import List from './components/list.js'
import Footer from './components/footer.js'
class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <List />
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;
