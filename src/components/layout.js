import Navbar from "./Navbar"
import Footer from "./Footer"
import { useSelector } from "react-redux"

export default function Layout({ children }) {
    const modal = useSelector(state => state.modal.modalStatus)
    return <>
        <Navbar />
        <main style={{
            maxWidth: "1500px",
            overflow: `${modal === true ? 'hidden' : 'visible'}`,
            height: `${modal === true ? '100vh' : 'initial'}`,
            padding: '0 10px',
            backgroundColor: '#eaeded',
            margin: '0 auto'
        }}>{children}</main>
        <Footer />
    </>
}