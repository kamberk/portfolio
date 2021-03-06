import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import Home from './components/home'
import {ReactComponent as MySVG} from './assets/up.svg';

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".sk-cube-grid");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    return (
      <>
      <ScrollToTop smooth component={<MySVG />} color='transparent' />
      <Home />
      </>
    );
  }
}

export default App;
