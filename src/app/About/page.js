import Header from "../__component/Header"
import Footer from "../__component/Footer"
import About from "../__component/About"
import { Breadcumb } from "../__component/Breadcumb"

const page = () => {

  return (
    <>
    <Header/>
    <Breadcumb name="ABOUT US" url="/About" urlName="About" />
    <About />
    <Footer />
    </>
  )
}

export default page