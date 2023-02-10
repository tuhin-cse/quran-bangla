import {useEffect} from "react";
import {useRouter} from "next/router";

const RouteLoader = () => {
    const router = useRouter()
    const hide = () => {
        hideLoader()
    }

    useEffect(() => {
        hide()
        router.events.on('routeChangeStart', showLoader)
        router.events.on('routeChangeComplete', hideLoader)
    }, [])


    return (
        <div className="loader" id="main-loader">
            <Loader/>
        </div>
    )
}
export default RouteLoader

export const showLoader = () => {
    try {
        document.querySelector('#main-loader').style.visibility = 'visible'
    } catch (e) {

    }
}

export const hideLoader = () => {
    try {
        document.querySelector('#main-loader').style.visibility = 'hidden'
    } catch (e) {

    }
}

export const Loader = () => {
    return (
        <div className="loading">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}