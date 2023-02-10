import Header from "../components/common/header";
import Footer from "../components/common/footer";

const HomeLayout = ({children}) => {
    return (
        <>
            <Header/>
            <div className="pt-14">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default HomeLayout
