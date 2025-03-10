import HeroSlideImageOne from "@/../public/assets/images/hero/hero-slide-1.webp";
import HeroSlideImageTwo from "@/../public/assets/images/hero/hero-slide-2.webp";

import HeroCardSlideImageOne from "@/../public/assets/images/hero/1.webp";
import HeroCardSlideImageTwo from "@/../public/assets/images/hero/2.webp";
import HeroCardSlideImageThree from "@/../public/assets/images/hero/3.webp";

import HeroTwoSlideBgImage from "@/../public/assets/images/hero/home_two-hero-bg.webp";
import HeroTwoSlideImageOne from "@/../public/assets/images/hero/ht-banner-img-1.webp";

const heroOneData = {
  slides: [
    {
      videoSrc: `<iframe 
      src="https://player.vimeo.com/video/1064196343?h=25f6810187&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
      style="width: 100%; height: 100%; border-radius: 10px;"
      title="360 video 2"></iframe>`,
      image: HeroSlideImageTwo,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "THE ARK MANS",
      description:
        "Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!",
      btnOneText: "Watch Now",
      btnTwoText: "Play Trailer",
    },
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "ENIGM OF SHADOWS",
      description:
        "Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!",
      btnOneText: "Watch Now",
      btnTwoText: "Play Trailer",
    },
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "The Dark Beauty",
      description:
        "Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!",
      btnOneText: "Watch Now",
      btnTwoText: "Play Trailer",
    },
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "ENIGM OF SHADOWS",
      description:
        "Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!",
      btnOneText: "Watch Now",
      btnTwoText: "Play Trailer",
    },
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "ENIGM OF SHADOWS",
      description:
        "Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!",
      btnOneText: "Watch Now",
      btnTwoText: "Play Trailer",
    },
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "ENIGM OF SHADOWS",
      description:
        "Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!",
      btnOneText: "Watch Now",
      btnTwoText: "Play Trailer",
    },
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "ENIGM OF SHADOWS",
      description:
        "Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!",
      btnOneText: "Watch Now",
      btnTwoText: "Play Trailer",
    },
  ],
  cardSlides: [
    {
      image: HeroCardSlideImageOne,
      title: "The Phantom Menace",
      description: "Action Movies",
    },
    {
      image: HeroCardSlideImageTwo,
      title: "The Dark Night",
      description: "Action Movies",
    },
    {
      image: HeroCardSlideImageThree,
      title: "ENIGMA OF SHADOWS",
      description: "Action Movies",
    },
  ],
};

const heroTwoData = {
  slides: [
    {
      videoSrc: "assets/video/video.mp4",
      bgImage: HeroTwoSlideBgImage,
      image: HeroTwoSlideImageOne,
      title: "THE LORD OF THE RING",
      description: "The Lord of the rings is a trilogy of epic fantasy",
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      btnOneText: "Watch Now",
      btnTwoText: "PLAY TRAILER",
    },
    {
      videoSrc: "assets/video/video.mp4",
      bgImage: HeroTwoSlideBgImage,
      image: HeroTwoSlideImageOne,
      title: "Ark man of earth",
      description: "The Lord of the rings is a trilogy of epic fantasy",
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      btnOneText: "Watch Now",
      btnTwoText: "PLAY TRAILER",
    },
    {
      videoSrc: "assets/video/video.mp4",
      bgImage: HeroTwoSlideBgImage,
      image: HeroTwoSlideImageOne,
      title: "Guardians of Galaxy",
      description: "The Lord of the rings is a trilogy of epic fantasy",
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      btnOneText: "Watch Now",
      btnTwoText: "PLAY TRAILER",
    },
  ],
};

const heroThreeData = {
  title: "The monkey king",
  review: "4.9",
  duration: "02h 30m",
  quality: "4k",
  downloadBtnText: "Download Now",
  addToListBtnText: "Add to List",
};

export { heroOneData, heroTwoData, heroThreeData };
