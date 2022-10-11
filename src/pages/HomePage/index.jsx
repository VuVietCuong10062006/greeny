import React from "react";
import BackTop from "../../components/BackTop";
import Banner from "./Banner";
import Countdown from "./Countdown";
import Feature from "./Feature";
import Intro from "./Intro";
import Promo from "./Promo";
import SellProduct from "./SellProduct";
import Testimonial from "./Testimonial";

const HomePage = () => {
    return (
        <>
            <Banner/>
            <SellProduct/>
            <Promo/>
            <Feature/>
            <Countdown/>
            <Testimonial/>
            <Intro/>
            <BackTop/>
        </>
    );
};

export default HomePage;
