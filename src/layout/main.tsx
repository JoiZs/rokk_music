import React from "react";
import Grid from "@mui/material/Grid";
const Header = React.lazy(() => import("../components/head/header"));
const Footer = React.lazy(() => import("../components/foot/footer"));
const Sidebar = React.lazy(() => import("../components/side/sidebar"));
const Showcont = React.lazy(() => import("../components/cont/showcont"));

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
