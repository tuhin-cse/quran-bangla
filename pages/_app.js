import {Fragment} from "react";
import "../styles/app.scss"

const App = ({Component, pageProps}) => {
    let Layout = Component.layout || Fragment

    return (
        <>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
    )
}


export default App