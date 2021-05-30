import "styles/globals.scss";
import "styles/fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/rodal.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loader from "components/shared/Loader";
import Header from "components/shared/Header/Header";
import Footer from "components/shared/Footer/Footer";
import { DATA } from "utils/constants";
import NextNprogress from "nextjs-progressbar";
import Head from "components/layout/Head";

function MyApp({ Component, pageProps }) {
  //const [loading, setLoading] = useState(true);

  //useEffect(() => {
  //  const timeout = setTimeout(() => setLoading(false), 800);
  //  return () => clearTimeout(timeout);
  //}, [Component]);

  return (
    <>
      <Head />
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
        options={{ easing: "ease", speed: 500 }}
      />
      {/*loading && <Loader />*/}
      <Header />
      <Component {...pageProps} />
      <Footer />
      <div hidden id="snipcart" data-api-key={DATA}></div>
    </>
  );
}

export default MyApp;
