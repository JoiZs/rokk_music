import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../../utils/loading";

const About = React.lazy(() => import("../../pages/about/about"));
const Albums = React.lazy(() => import("../../pages/albums/albums"));
const Bands = React.lazy(() => import("../../pages/bands/bands"));
const Discography = React.lazy(
  () => import("../../pages/discography/discographqy")
);
const Following = React.lazy(() => import("../../pages/following/following"));
const Home = React.lazy(() => import("../../pages/home/home"));
const Liked = React.lazy(() => import("../../pages/liked/liked"));
const Playlists = React.lazy(() => import("../../pages/playlists/playlists"));
const Popular = React.lazy(() => import("../../pages/popular/popular"));
const Reviews = React.lazy(() => import("../../pages/reviews/reviews"));
const Videos = React.lazy(() => import("../../pages/videos/videos"));

interface Props {}

const Showcont = (props: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bands" element={<Bands />} />
        <Route path="albums" element={<Albums />} />
        <Route path="playlists" element={<Playlists />} />
        <Route path="liked" element={<Liked />} />
        <Route path="following" element={<Following />} />
        <Route path="popular" element={<Popular />} />
        <Route path="about" element={<About />} />
        <Route path="discography" element={<Discography />} />
        <Route path="videos" element={<Videos />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </Suspense>
  );
};

export default Showcont;
