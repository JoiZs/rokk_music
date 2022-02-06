import { Grid } from "@mui/material";
import React from "react";
import { FiClock } from "react-icons/fi";
import Coverinfo from "../../components/cont/coverinfo";
import Listasong from "../../components/cont/listasong";
import Translate from "../../utils/translate";
import Listalbum from "../../components/cont/listalbum";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/mousewheel";

interface Props {}

const popular = {
  title: "John Denver",
  follower: 34244000,
  monthlyListener: 284213236,
  coverImg:
    "https://d2bw7v1ep7mzfe.cloudfront.net/images/2021/4/12/Danoff_Main.jpg?width=1024&height=576&mode=crop",
  popularsongs: [
    {
      title: "Take Me Home, Country Roads",
      image:
        "https://cdns-images.dzcdn.net/images/cover/31383f3d2c444ca382c19c1def301e95/264x264.jpg",
      year: 1971,
      album: "Country Roads",
      plays: 403881234,
      fav: true,
    },
    {
      title: "Annie's Song",
      image:
        "https://cdns-images.dzcdn.net/images/cover/31383f3d2c444ca382c19c1def301e95/264x264.jpg",
      year: 1971,
      album: "Country Roads",
      plays: 14564443,
      fav: true,
      song: "",
    },
    {
      title: "Rocky Mountain High",
      image:
        "https://cdns-images.dzcdn.net/images/cover/31383f3d2c444ca382c19c1def301e95/264x264.jpg",
      year: 1971,
      album: "Country Roads",
      plays: 6136423,
      fav: false,
      song: "",
    },
    {
      title: "Thank God I'm a Country Boy",
      image:
        "https://cdns-images.dzcdn.net/images/cover/31383f3d2c444ca382c19c1def301e95/264x264.jpg",
      year: 1971,
      album: "Country Roads",
      plays: 1421355,
      fav: false,
      song: "",
    },
    {
      title: "We Wish You a Merry Christmas",
      image:
        "https://cdns-images.dzcdn.net/images/cover/31383f3d2c444ca382c19c1def301e95/264x264.jpg",
      year: 1971,
      album: "Country Roads",
      plays: 3214234,
      fav: false,
      song: "",
    },
  ],
  popularalbums: [
    {
      title: "Karma",
      year: 1992,
      albumImg:
        "https://ih1.redbubble.net/image.642691014.4065/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u6.jpg",
    },
    {
      title: "Karma",
      year: 1994,
      albumImg:
        "https://ih1.redbubble.net/image.642691014.4065/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u6.jpg",
    },
    {
      title: "Karma",
      year: 1996,
      albumImg:
        "https://ih1.redbubble.net/image.642691014.4065/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u6.jpg",
    },
    {
      title: "Karma",
      year: 1992,
      albumImg:
        "https://ih1.redbubble.net/image.642691014.4065/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u6.jpg",
    },
    {
      title: "Karma",
      year: 1994,
      albumImg:
        "https://ih1.redbubble.net/image.642691014.4065/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u6.jpg",
    },
    {
      title: "Karma",
      year: 1996,
      albumImg:
        "https://ih1.redbubble.net/image.642691014.4065/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u6.jpg",
    },
  ],
};

const Popular = (props: Props) => {
  return (
    <div className="flex text-sm max-h-min overflow-y-scroll scrolldesign text-gray-400 flex-col w-full justify-center items-center h-full">
      <Grid container className="w-full">
        <Grid item height={"50%"} xs={12} className="pt-24">
          <Coverinfo
            title={popular.title}
            follower={popular.follower}
            monthlyListener={popular.monthlyListener}
            coverImg={popular.coverImg}
          />
        </Grid>
        <Grid
          item
          height={60}
          className="text-gray-200 py-16 flex items-center text-3xl px-6"
          xs={10}
        >
          <Translate>Popular Songs</Translate>
        </Grid>
        <Grid item className="flex justify-center items-center" xs={2}>
          <Translate>See more</Translate>
        </Grid>
        <Grid item xs={1} className="flex uppercase justify-center">
          <Translate># Title</Translate>
        </Grid>
        <Grid item xs={5} className="z-10"></Grid>
        <Grid item xs={4} className=" z-10">
          <Translate>PLAYS</Translate>
        </Grid>
        <Grid item xs={2} className="flex px-2 items-center">
          <FiClock />
        </Grid>
        <div className="px-4 w-full">
          {popular.popularsongs.map((el, index) => (
            <Listasong key={el.title} listnumber={index + 1} data={el} />
          ))}
        </div>

        <Grid
          item
          height={60}
          className="text-gray-200 py-16 flex items-center text-3xl px-6"
          xs={10}
        >
          <Translate>Popular Albums</Translate>
        </Grid>
        <Grid item className="flex justify-center items-center" xs={2}>
          <Translate>Explore Discography</Translate>
        </Grid>
        <Grid item xs={12} className="px-24 pb-16">
          <Swiper
            className="w-full"
            direction={"horizontal"}
            slidesPerView={4}
            mousewheel
            modules={[Mousewheel]}
          >
            {popular.popularalbums.map((el) => (
              <SwiperSlide key={el.title + Math.random()}>
                <Listalbum
                  title={el.title}
                  year={el.year}
                  albumImg={el.albumImg}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Popular;
