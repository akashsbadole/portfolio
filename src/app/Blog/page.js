import Header from "../__component/Header"
import Footer from "../__component/Footer"
import { Breadcumb } from "../__component/Breadcumb"
import { Blog } from "../__component/Blog"

const page = () => {
  return (
    <>
    <Header />
    <Breadcumb name="Blog" url="/Blog" urlName="Blog" />
    <Blog />
    <Footer />
    </>
  )
}

export default page