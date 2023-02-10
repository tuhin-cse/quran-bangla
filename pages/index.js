import HomeLayout from "../layouts/home";
import Hero from "../components/home/hero";
import Features from "../components/home/features";
import Learning from "../components/home/learning";
import Category from "../components/home/category";
import Experience from "../components/home/experience";
import Members from "../components/home/members";
import Brands from "../components/home/brands";
import Testimonials from "../components/home/testimonials";

const Home = () => {
    return (
        <>
            <Hero/>
            <Features/>
            <Learning/>
            <Category/>
            <Experience/>
            <Members/>
            <Brands/>
            <Testimonials/>
        </>
    )
}

Home.layout = HomeLayout
export default Home