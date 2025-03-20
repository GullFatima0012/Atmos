import logo from "@/../public/assets/images/logo.svg";

const menuOneData = {
  logo: logo,
  href: "/",
  btnText: "Login",
  menus: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About One",
      href: "about",
    },
    {
      name: "Videos",
      href: "#",
      subMenus: [
        {
          name: "Videos List",
          href: "movie-list",
        },
        {
          name: "Movies Category",
          href: "category",
        },
      ],
    },

 
    {
      name: "FAQ",
      href: "faq",
    },
  ],
};

const menuTwoData = {
  primaryMenus: [
    { name: "Home", href: "/" },
    { name: "Search", href: "category" },
    { name: "Videos", href: "movie-list" },
    { name: "Add To Playlist", href: "playlist" },
    { name: "Tv Showes", href: "pagination-one" },
    { name: "Games", href: "pagination-two" },
    { name: "Sports", href: "pagination-one" },
  ],
};

export { menuOneData, menuTwoData };
