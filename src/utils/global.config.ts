export const GLOBAL_CONFIG = {
  pagination: {
    pageSize: 6,
    morePostsSize: 6,
    featuredPostsSize: 6,
    allPostsSize: 50,
  },
  images: {
    defaultPostImageWidth: 1024,
    defaultPostImageHeight: 600,
    defaultPostPreviewImageWidth: 640,
    defaultPostImagePreviewHeight: 376,
    defaultAvatarImageWidthHeight: 44,
    defaultRoundImageWidthHeight: 256,
    defaultQuality: 80,
  },
  menuLinks: [
    { href: "/", title: "home" },
    { href: "/blog/p/1", title: "blog" },
    { href: "/categories", title: "categories" },
    { href: "/about", title: "about" },
  ],
  siteUrl: "https://addict.cf",
  youtubeLink: "https://www.youtube.com/channel/UCg83jkm7aM3OKTAWMoSpf2A/",
  facebookLink: "https://www.facebook.com/doktorGrin/",
  telegramLink: "https://t.me/vgrean",
  githubLink: "https://github.com/zvirinz/grean-app-2022",
  trimmedHeaderLength: 55,
};

export const LOCALIZED_ALGOLIA_INDICES = [
  {
    indexName: "addict-ru",
    locale: "ru",
  },
  {
    indexName: "addict-pl",
    locale: "pl",
  },
];

export const SANITY_CONFIG = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
};

export const SANITY_CONFIG_ALGOLIA = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: false,
};

export const LOCALIZED_RSS_DATA = [
  {
    siteName: "addict-ru",
    siteDescription: "addict-ru",
    locale: "ru-RU",
  },
  {
    siteName: "addict-pl",
    siteDescription: "addict-pl",
    locale: "pl-PL",
  },
];

export const AUTHOR = {
  name: "Valeriy Grean",
  email: "vgrean@gmail.com",
  link: "https://twitter.com",
};

export const SEO = {
  openGraph: {
    titleTemplate: "Addict.cf | %s",
    description: "Blog about addiction",
    type: "website",
    url: "https://www.addict.cf/",
    site_name: "Addict.cf - blog about addiction",
  },
};
