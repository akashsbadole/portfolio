"use client"
// import Image from 'next/image'
// import styles from './page.module.css'
import Header from "./__component/Header";
import Footer from "./__component/Footer";
import Banner from "./__component/Banner";
import Content from "./__component/Content";

export default function Home() {
  return (
    <>
    <Header />
      <h2>hello</h2>
      <Banner />
      <Content />
      <Footer />
    </>
  );
}
