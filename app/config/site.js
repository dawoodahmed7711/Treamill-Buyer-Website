// Central business info. Edit here and it updates everywhere.

export const site = {
  name: "TreadCash Punjab",
  tagline: "Old Gym Machines? Sell Now! Get Cash",
  url: "https://www.yourdomain.com", // TODO: replace with your real domain
  phoneDisplay: "0306 4657801",
  phoneTel: "+923064657801",
  whatsappNumber: "923064657801", // international format, no "+"
  serviceArea: "Punjab, Pakistan",
  description:
    "Want to sell your old treadmill? We buy used treadmills for instant cash across Punjab, including Lahore, Faisalabad, Rawalpindi and Multan. We come to your city. Fill in the form and contact us on WhatsApp.",
};

export const whatsappLink = (text) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const cities = [
  "Lahore",
  "Faisalabad",
  "Rawalpindi",
  "Gujranwala",
  "Multan",
  "Sialkot",
  "Bahawalpur",
  "Sargodha",
  "Sheikhupura",
  "Gujrat",
  "Jhelum",
  "Sahiwal",
  "Rahim Yar Khan",
  "Dera Ghazi Khan",
  "Kasur",
  "Okara",
  "Other (Punjab)",
];

export const steps = [
  { title: "Fill in the form", text: "Send your name, city and treadmill details." },
  { title: "Get a quote", text: "We contact you on WhatsApp with an estimated price." },
  { title: "Get paid in cash", text: "We visit you, check the treadmill and pay in cash." },
];

export const faqs = [
  {
    q: "Do you buy treadmills across Pakistan?",
    a: "No. Our service is available only in Punjab, Pakistan.",
  },
  {
    q: "How does payment work?",
    a: "Once the deal is agreed, we visit your location, inspect the treadmill and pay you in cash on the spot.",
  },
  {
    q: "Do you buy faulty treadmills?",
    a: "Yes. We consider both working and slightly faulty treadmills. Send us the details and we will quote a price.",
  },
  {
    q: "Is there any charge for inspection or pickup?",
    a: "No. The visit and pickup are completely free.",
  },
];

export const images = {
  hero: "https://images.unsplash.com/photo-1591940765155-0604537032a5?auto=format&fit=crop&w=900&q=80",
  gallery: [
    {
      id:1,
      src: '/site1.png',
      alt: "Used treadmill and gym equipment buyer in Punjab 1",
    },
    {
      id:2,
      src: "/site2.png",
      alt: "Used treadmill and gym equipment buyer in Punjab 2",
    },
  ],
};
