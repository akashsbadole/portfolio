import Header from "../__component/Header"
import Footer from "../__component/Footer"
import { Breadcumb } from "../__component/Breadcumb"
import { Contact } from "../__component/Contact"

const page = () => {
  return (
    <>
    <Header />
    <Breadcumb name="Contact" url="/Contact" urlName="Contact" />
    <Contact />
    <Footer />
    </>
  )
}

export default page