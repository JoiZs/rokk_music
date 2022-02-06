import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/about/about";
import Albums from "../../pages/albums/albums";
import Bands from "../../pages/bands/bands";
import Discography from "../../pages/discography/discographqy";
import Following from "../../pages/following/following";
import Home from "../../pages/home/home";
import Liked from "../../pages/liked/liked";
import Playlists from "../../pages/playlists/playlists";
import Popular from "../../pages/popular/popular";
import Reviews from "../../pages/reviews/reviews";
import Videos from "../../pages/videos/videos";

interface Props {}

const Showcont = (props: Props) => {
  return (
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
  );
};

export default Showcont;
