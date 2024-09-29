import Header from "/src/components/layout/header/header";
import { StyledMain } from "./styles";
import ScrollToTop from "../../ui/scroll-to-top/scroll-to-top";
import { Outlet } from "react-router-dom";


function PageWrapper( ) {
  
  return (
    <>
      {/* <ScrollToTop /> */}
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <footer />
    </>
  );
}

export default PageWrapper;