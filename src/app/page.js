// "use client"
// import Image from 'next/image'
// import styles from './page.module.css'
import Header from "./__component/Header";
import Footer from "./__component/Footer";
import Content from "./__component/Content";

export default function Home() {
  return (
    <>
    <Header />
      <Content />
      <Footer />
    </>
  );
}
