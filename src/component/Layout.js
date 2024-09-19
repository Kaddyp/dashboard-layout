import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
     <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="gray" area={"header"} color="white">
        <Header />
      </GridItem>
      <GridItem pl="2" bg="#D8DCD6" area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem pl="2" bg="#FFFFFF" area={"main"} h={600}>
        <Outlet />
      </GridItem>
      <GridItem pl="2" bg="gray" area={"footer"}  color="white">
        <Footer />
      </GridItem>
    </Grid>    
    </>
   
  );
};
export default Layout;
