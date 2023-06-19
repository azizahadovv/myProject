import {
  Bill,
  usa,
  Logo,
  Phone,
  Setting,
  SimCard2,
  russia,
  israil,
} from "./image";
export const sidebar = [
  { id: 1, img: Logo, title: "" },
  { id: 2, img: SimCard2, title: "My Account" },
  { id: 3, img: Bill, title: "Bill" },
  { id: 4, img: Phone, title: "Services" },
  { id: 5, img: Setting, title: "Support" },
];

export const countries = [
  {
    id: 1,
    img: usa,
    coutri: "Usa",
    check: true,
    number: [
      { nums: "+1 7602271144", check: false },
      { nums: "+1 7602270322", check: true },
      { nums: "+1 7602270333", check: false },
    ],
  },
  {
    id: 2,
    img: russia,
    coutri: "Russia",
    check: false,
    number: [{ nums: "+7 9583897416", check: false }],
  },
  {
    id: 3,
    img: israil,
    coutri: "Israil",
    check: false,
    number: [{ nums: "+972 553321747", check: false }],
  },
];

export const card = [
  {
    name: "Remaining Balance",
    prise: -151608.79,
    date: "Dec 3, 2021, 11:33:28 PM",
  },
  {
    name: "Current Charges",
    prise: 0.0,
    date: "Dec 1, 2021 - Dec 3, 2021",
  },

  {
    name: "Amount Due",
    prise: 42000.0,
    date: "Dec 1, 2021 - Jan 1, 2022",
  },
  {
    name: "Charges for Basic Services",
    prise: 0.0,
    date: "Dec 1, 2021 - Dec 3, 2021",
  },
];

export const card2 = [
  {
    name: "Home Zone Internet",
    prise: 30720,
    date: "Till Jan 1, 2022",
  },
  {
    name: "Home Zone Outgoing Calls",
    prise: 2500,
    date: "Till Jan 1, 2022",
  },
];

export const navbarBill = [
  { id: 1, title: "Itemization of Phone Calls" },
  { id: 2, title: "Monthly Bill" },
  { id: 3, title: "Payment History" },
  { id: 4, title: "Pay Your Bill" },
  { id: 5, title: "Autopay Setup" },
  { id: 6, title: "Previously Ordered Reports" },
];

/* ******************************************************** */
export const navbarServis = [
  { id: 1, title: "Admin your phone numbers" },
  { id: 2, title: "Plan Change" },
  { id: 3, title: "Services" },
  { id: 4, title: "Call Forwarding" },
];

export const navbarServisCard = [
  {
    id: 1,
    CountName: "USA",
    img: usa,
    number: "+1 7602270322",
    title: "The service is connected - Feb 26, 2020, 3:00:00 AM",
    btn: "Disconnect",
  },
  {
    id: 2,
    img: israil,
    CountName: "ISRAEL",
    number: "+972 553321747",
    title: "The service is connected - Nov 26, 2019, 3:00:00 AM",
    btn: "Disconnect",
  },
];

export const servisCard = [
  {
    id: 1,
    name: "Add a new number",
    title:
      "Select any country and quantity of numbers that we have available for you",
  },
  {
    id: 2,
    name: "History of changes",
    title: "Check your number management records",
  },
];
