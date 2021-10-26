import { USERS } from "./Users";

export const POSTS = [
  {
    imageUrl: "https://i.ibb.co/182bP1y/4k.png",
    user: USERS[0].name,
    likes: 7870,
    caption: "Tarin Ride to Hogwarts.",
    profile_picture: USERS[0].img,
    comments: [
      {
        user: "theqazman",
        comment: "WOW! This build looks fire. Super excited about...",
      },
      {
        user: "amaanath.dev",
        comment: "Once I wake up, I'll finally be ready to cope this up!",
      },
    ],
  },
  {
    imageUrl: "https://i.ibb.co/183bP1y/4k.png",
    user: USERS[1].name,
    likes: 7870,
    caption: "Tarin Ride to Hogwarts.",
    profile_picture: USERS[1].img,
    comments: [
      {
        user: "cleverqazy",
        comment: "Yo",
      },
      {
        user: "amaanath.dev",
        comment: "Hey what's up?",
      },
    ],
  },
];
