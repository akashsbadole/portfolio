import Header from "../__component/Header"
import Footer from "../__component/Footer"
import { Breadcumb } from "../__component/Breadcumb"

const page = () => {
  return (
    <>
    <Header />
    <Breadcumb name="Portfolio" url="/Portfolio" urlName="Portfolio" />
    <Footer />
    </>
  )
}

export default page