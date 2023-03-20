import Head from "next/head";
import ChatGPTResponse from "../components/ChatGPTResponse";
import UserInput from "../components/UserInput";


function HomePage() {
  return (
    <>
      <Head>
        <meta></meta>
      </Head>
      <div>Welcome to Next.js!</div>
      <UserInput></UserInput>
    </>
  );
}

export default HomePage;
