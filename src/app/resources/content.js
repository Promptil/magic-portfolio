import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Alfloo",
  lastName: "",
  get name() {
    return this.firstName;
  },
  role: "Electronic Shisha Innovation",
  avatar: "/images/avatar.jpg",
  location: "Asia/Hong_Kong",
  languages: ["English", "Arabic"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Stay updated with the latest innovations in electronic shisha technology and Middle Eastern culture.
    </>
  ),
};

const social = [
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/alfloo/",
  // },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contact@alfloo.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} - Redefining the Future of Shisha`,
  description: `Modern consumer brand dedicated to the innovation of electronic shisha technology`,
  headline: <>Redefining the Future of Shisha</>,
  subline: (
    <>
      A modern consumer brand dedicated to the innovation of electronic shisha technology
      <br /> and the fusion of Middle Eastern culture with modern lifestyle.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Alfloo",
  description: `Learn about ${person.name}'s mission to revolutionize the shisha experience`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Alfloo is a modern consumer brand dedicated to the innovation of electronic shisha technology 
        and the fusion of Middle Eastern culture with modern lifestyle. Our technology headquarters 
        is based in Hong Kong, a global hub for trade and creativity. We are committed to reimagining 
        the traditional shisha experience through technology—delivering a more convenient, healthier, 
        and eco-friendly alternative for shisha enthusiasts around the world.
      </>
    ),
  },
  work: {
    display: true,
    title: "Our Mission",
    experiences: [
      {
        company: "Innovation",
        timeframe: "Present",
        role: "Technology Leadership",
        achievements: [
          <>
            Independently develop cutting-edge electronic shisha devices that combine modern industrial 
            design with intelligent temperature control systems.
          </>,
          <>
            Deliver highly authentic flavor performance and compatibility with traditional shisha equipment, 
            seamlessly blending modern technology with classic ritual.
          </>,
        ],
        images: [],
      },
      {
        company: "Global Expansion",
        timeframe: "Present",
        role: "Market Development",
        achievements: [
          <>
            Actively expanding into the Middle East, North Africa, and European markets.
          </>,
          <>
            Establishing strategic partnerships with regional lounges, distributors, and retailers.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "",
    institutions: [],
  },
  technical: {
    display: false,
    title: "",
    skills: [],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
