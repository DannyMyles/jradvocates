/** Copy taken from the firm's existing home page. */

export const welcome = {
  kicker: "Karibu sana",
  title: "Welcome to Josephine Righa Advocates",
  text: "JR Advocates is an established corporate and commercial law firm operating in Nairobi, Kenya. We are dedicated to providing our clients with competent, consistent and outstanding legal services.",
};

export const partnerMessage = {
  quote:
    "Our clients are our most valuable assets. By cultivating sincere and intimate relationships we are able to ascertain their needs and work to deliver the most satisfactory outcome.",
  paragraphs: [
    "Welcome to JR Advocates! We are pleased to have the opportunity to introduce ourselves to you and explain our unwavering commitment to the legal profession and to providing unmatched quality service to our clients and community. JR prides itself on being a knowledgeable and reputable law firm anchored on the pillars of integrity, justice and fairness steering us towards putting our clients’ needs first and providing consistent and excellent personalized services; one where they feel they have more of a trusted business partner than simply a good lawyer.",
    "Our practice is well tuned to local knowledge and global perspectives as far as the legal profession is concerned. We have a great mix of attorneys with sector-specific expertise that helps create value for clients by applying a problem-solving approach and delivering innovative solutions whilst engaging clients throughout the process.",
    "At JR, we strive for excellence and provide personalized legal services to the delight of our clients.",
  ],
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "JR Advocates consists of an incredibly responsive team. They are quite relational as they were able to quickly understand our needs not just from a legal perspective but also in the bigger picture of our business, meaning they not only delivered results, but also provided good counsel. Working with JR Advocates makes you feel like you are talking to a business partner. Their width and depth of knowledge of the law gives us a lot of confidence in making decisions as we grow.",
    name: "Hannah Clifford",
    role: "Director, Nairobi Garage",
  },
  {
    quote:
      "The team at JR Advocates is not only efficient but I also found them very prompt in their engagement with me. They were willing and able to go the extra mile as they worked overnight to ensure my matter was sorted out despite my short notice. Kudos for efficiency.",
    name: "Alfred Sila",
    role: "General Manager, Gilfilian Air Conditioning Limited",
  },
  {
    quote:
      "Our business association with JR Advocates has been a very positive and rewarding experience. Ms. Righa is a very thorough and competent professional with an outstanding record of timely and successful completion of any task presented to her. Transform af 1994 ApS – Danish Rootzone Technology highly recommends JR Advocates and we are confident to continue working with Ms. Righa in our current and future projects.",
    name: "Emma Nives Lorenzen",
    role: "International Sales and Marketing Consultant, Danish Rootzone Technology",
  },
  {
    quote:
      "I have known Ms. Righa for the past 5 years. She has got very good work ethic, very loyal, kind, patient and a hands-on professional. I would comfortably recommend her Firm's services to anyone in need of legal advice in Kenya.",
    name: "Hilda Nakato",
    role: "Director, Lakato Safaris (U) Limited",
  },
];

export type HeroSlide = {
  kicker: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  /** CSS object-position for the photo. */
  position: string;
  caption: string;
};

/** Hero slides. Headlines are the three messages from the firm's existing homepage slider. */
export const heroSlides: HeroSlide[] = [
  {
    kicker: "Corporate and commercial law firm in Nairobi",
    title: "Committed to helping our clients succeed.",
    text: "Competent, consistent and outstanding legal services for businesses, investors and families.",
    image: "/images/hero/josephine-portrait.jpg",
    alt: "Josephine L. M. Righa, Managing Partner of JR Advocates",
    position: "center 22%",
    caption: "Josephine L. M. Righa, Managing Partner",
  },
  {
    kicker: "Our philosophy",
    title: "For others it is business. For us, it is personal.",
    text: "We put our clients’ needs first and go the extra mile, as a trusted business partner rather than simply a good lawyer.",
    image: "/images/hero/josephine-at-desk.jpg",
    alt: "Josephine Righa working at her desk",
    position: "center 30%",
    caption: "Josephine L. M. Righa at work",
  },
  {
    kicker: "Our values",
    title: "Love and respect for all our clients.",
    text: "Relationships, integrity, passion and excellence guide how we advise, negotiate and represent every client.",
    image: "/images/hero/office-reception.jpg",
    alt: "The JR Advocates sign at the firm’s reception",
    position: "62% center",
    caption: "Josephine Righa Advocates, Nairobi",
  },
];
