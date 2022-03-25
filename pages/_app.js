import Header from "../Containers/Header";
import Layout from "../layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    <>
      <Header />
      <Component {...pageProps} />
    </>
    // </Layout>
  );
}

export default MyApp;
