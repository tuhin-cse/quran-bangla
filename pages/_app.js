import {Fragment} from "react";
import "../styles/app.scss"
import Head from "next/head";
import RouteLoader from "../components/common/preloader";

const App = ({Component, pageProps}) => {
    let Layout = Component.layout || Fragment

    return (
        <>
            <Head>
                <title>The Holy Quran</title>
                <link rel='manifest' href='/manifest.json' />
            </Head>
            <RouteLoader/>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
    )
}


export default App