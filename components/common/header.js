import Link from "next/link";
import {useState} from "react";
import {Modal, QRCode} from "antd";

const Header = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="border-b fixed w-full bg-white">
            <div className="container">
                <div className="flex justify-between py-2">
                    <Link href="/">
                        <h4 role="button" className="text-2xl text-gray-700 font-semibold">Quran</h4>
                    </Link>
                    <div className="flex py-1">
                        <Link href="/words" className="mr-2">Words</Link>
                        <a role="button" onClick={() => setShow(true)}>Share</a>
                    </div>
                </div>
            </div>
            <Modal open={show} onCancel={() => setShow(false)} width={350} title="Scan Qr" footer={null}>
                <QRCode value={ "https://" + (typeof window !== "undefined" ? window?.location?.hostname : "")} size={300}/>
            </Modal>
        </div>
    )
}

export default Header