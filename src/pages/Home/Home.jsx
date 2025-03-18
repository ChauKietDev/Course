import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Headers from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav"
import SliderComponent from "../../components/Slider/SliderComponent"
import Section1 from "../../components/Section/Section1"
import TopCourse from "../../components/Section/TopCourse";
import BLog from "../../components/Blog/Blog"
import CourseProgrammning from "../../components/Section/CourseProgramming"

import slider1 from "../../assets/image/banner/banner1.jpg"
import slider2 from "../../assets/image/banner/banner2.png"
import slider3 from "../../assets/image/banner/banner3.jpg"

function Home() {
    return (
        <>
          <Headers />
          <Nav />
          <SliderComponent
            arrImage={
              [
                { href: 'slider1', img: slider1 },
                { href: 'slider2', img: slider2 },
                { href: 'slider3', img: slider3 },
              ]
            } />
          <Section1 />
          <TopCourse />
          <CourseProgrammning />
          <BLog />
          <Footer/>
        </>
      )
}

export default Home