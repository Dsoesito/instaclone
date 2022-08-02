import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/feed";
import Header from "../components/header";
import Modal from "../components/modal";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>InstaClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
      <Modal />
    </div>
  );
};

export default Home;
