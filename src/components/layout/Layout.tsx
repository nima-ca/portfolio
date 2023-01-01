import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";

const Layout = (props: any) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
