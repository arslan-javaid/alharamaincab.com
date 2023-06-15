import LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

const config: LayoutConfigTypes = {
  themeName: "Al-HaramainCab",
  themeVersion: "8.0.30",
  demo: "demo1",
  main: {
    type: "default",
    primaryColor: "#009EF7",
    logo: {
      dark: "media/logos/logo.png",
      light: "media/logos/logo.png",
    },
  },
  loader: {
    logo: "media/logos/logo.png",
    display: true,
    type: "default",
  },
  scrollTop: {
    display: true,
  },
  header: {
    display: false,
    menuIcon: "font",
    width: "fluid",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  toolbar: {
    display: true,
    width: "fluid",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  aside: {
    display: true,
    theme: "light",
    fixed: true,
    menuIcon: "svg",
    minimized: true,
    minimize: true,
    hoverable: true,
  },
  content: {
    width: "fixed",
  },
  footer: {
    width: "fluid",
  },
};

export default config;
