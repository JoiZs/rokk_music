import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../components/head/header";
import Footer from "../components/foot/footer";
import Sidebar from "../components/side/sidebar";
import Showcont from "../components/cont/showcont";

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <Grid container className="h-screen w-screen overflow-hidden">
      <Grid item height={"8%"} xs={12} className="flex items-center">
        <Header />
      </Grid>
      <Grid item height={"80%"} xs={2}>
        <Sidebar />
      </Grid>
      <Grid item height={"80%"} xs={10}>
        <Showcont />
      </Grid>
      <Grid height={"12%"} item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Main;
