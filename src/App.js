import React from 'react';
import './App.css';

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
        Ptext: "Please take a look at my projects below"
      },
      about: {
        title: "About me",
      },
      contact: {
        title: "Im just an e-mail away",
      }
    }
  }


  render() {
    return (
      <div>hello world</div>
    );
  }
}

export default App;
