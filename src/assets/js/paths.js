/** Parish info & page paths (file-based — works with Live Server) */
const PATHS = {
  home: "/src/pages/index.html",
  about: "/src/pages/about.html",
  leadership: "/src/pages/leadership.html",
  give: "/src/pages/give.html",
  services: "/src/pages/index.html#worship-schedule",
  contact: "/src/pages/index.html#contact",
  theme: "/src/pages/index.html#theme",
  ministries: "/src/pages/ministries.html",
  ministry: "/src/pages/ministry.html",
  ministryId: (id) => `/src/pages/ministry.html?id=${encodeURIComponent(id)}`,
  fellowships: "/src/pages/fellowships.html",
  fellowship: "/src/pages/fellowship.html",
  fellowshipId: (id) => `/src/pages/fellowship.html?id=${encodeURIComponent(id)}`,
  sermons: "/src/pages/sermons.html",
  shop: "/src/pages/shop.html",
};

const PARISH = {
  name: "ACK St. Phillips Roadblock",
  legalName: "Anglican Church of Kenya — St. Phillips Roadblock",
  shortName: "St. Phillips Roadblock",
  area: "Roadblock, Eldoret",
  county: "Uasin Gishu County",
  diocese: "Diocese of Eldoret",
  tagline: "A caring, listening church",
  phone: "+254 798 125 596",
  email: "info@stphillips.church.org",
  officeHours: "Tuesdays, 8:00 AM – 5:00 PM",
  pageTitleSuffix: "ACK St. Phillips Roadblock",
};
