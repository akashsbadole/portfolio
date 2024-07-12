import Header from "../__component/Header"
import Footer from "../__component/Footer"
import { Breadcumb } from "../__component/Breadcumb"
import Portfolio from "../__component/Portfolio"


const page = () => {
  return (
    <>
    <Header />
    <Breadcumb name="Services" url="/Services" urlName="Services" />
    <Portfolio />
    <Footer />
    </>
  )
}

export default page