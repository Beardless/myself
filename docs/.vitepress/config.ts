import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Beardless",
  base: "/myself/",
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/beardless" },
      { icon: "twitter", link: "https://twitter.com/beardlesSole47" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/bartlomiej-mikolajczuk/",
      },
      { icon: "instagram", link: "https://www.instagram.com/mikolajczuk.b/" },
    ],
    sidebar: [
      {
        items: [{ text: "About me", link: "/" }],
      },
    ],
  },
});
