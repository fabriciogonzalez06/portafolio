// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/index';
import { readInitialInformation } from './redux/actions';
// import { About } from "./components/About";
// // import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { connect } from "react-redux";
// import { NewTechologies } from "./components/newTechologies";
// import { Portafolio } from "./components/Portafolio";
// import { Resume } from "./components/Resume";
// import { Skills } from "./components/Skills";
// import { Testimonials } from "./components/Testimonials";

// eslint-disable-next-line no-unused-vars
function App(props) {

  const { readInitialInformation } = props;

  useEffect(() => {
    readInitialInformation();
  }, []);

  return (
    <ThemeProvider theme={theme} >
      <Header />
      <Hero me={{}} />

      {/* {loading ? (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      ) : (
        <span>
          <Hero me={data.me} />
          <About about={data.about} />
          <Resume resumes={data.resume} />
          <Skills skills={data.skills} />
          <NewTechologies  data={data.studying} />
          <Portafolio portafolio={data.portafolio}  />
          <Footer me={data.me} />
        </span>
      )} */}
    </ThemeProvider>
  );
}

// const mapStateToProps = (state) => {
//   console.log(state)
// }
const mapDispatchToProps = {
  readInitialInformation
}

export default connect(null, mapDispatchToProps)(App);
