import { useEffect, useState } from "react";
import ReactGA from 'react-ga';
import "./App.css";
import { About } from "./components/About";
// import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NewTechologies } from "./components/newTechologies";
import { Portafolio } from "./components/Portafolio";
import { Resume } from "./components/Resume";
import { Skills } from "./components/Skills";
// import { Testimonials } from "./components/Testimonials";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
    ReactGA.initialize('UA-187780735-1');
    ReactGA.pageview(window.location.pathname);
  }, []);

  const getData = () => {
    setLoading(true);
    fetch("data.json")
      .then((res) => res.json())
      .then((dataRes) => {
        // console.log("data res ", dataRes);
        setData({ ...dataRes });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        console.warn("no se pudo obtener la data ", error.message);
      });
  };

  return (
    <>
      <Header />

      {loading ? (
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
          {/* <Testimonials /> */}
          {/* <Contact /> */}
          <Footer me={data.me} />
        </span>
      )}

      
    </>
  );
}

export default App;
