import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from '../src/Components/Footer'
import HomePage from '../src/pages/HomePage'
import AboutPage from '../src/pages/AboutPage'
import ContactPage from '../src/pages/ContactPage'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Anthony Aguiar",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Always Aspire",
        subTitle: "My journey to becoming a better Developer",
        text: "Please take a look at my projects below"
      },
      about: {
        title: "About me"
      },
      contact: {
        title: "Im just an e-mail away"
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="md">
            <Navbar.Brand>Anthony Aguiar</Navbar.Brand>

            <Navbar.Toggle className="border-bottom" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>


              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage
            title={this.state.home.title}
            subTitle={this.state.home.subTitle}
            text={this.state.home.text}
          />} />

          <Route path="/about" exact render={() => <AboutPage
            title={this.state.about.title}
          />} />

          <Route path="/contact" exact render={() => <ContactPage
            title={this.state.contact.title}
          />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
