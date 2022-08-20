import {
  ANAKIN_IMAGE,
  CHEWBACCA_AVATAR,
  CHEWBACCA_IMAGE,
  LEIA_AVATAR,
  LEIA_IMAGE,
  RAY_IMAGE,
} from "./const-img";

export const tweetsData = [
  {
    author: {
      name: "Chewbacca",
      photo: CHEWBACCA_AVATAR,
      nickname: "@WookieeSpeaks",
    },
    content: "How I currently feel in lockdown",
    image: CHEWBACCA_IMAGE,
    date: "22 лют.",
    actions: {
      comments: 482,
      likes: 887,
      reposts: 146,
    },
    id: 100,
  },
  {
    author: {
      name: "Anakin Skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 лют.",
    actions: {
      comments: 352,
      likes: 664,
      reposts: 134,
    },
    id: 101,
  },
  {
    author: {
      name: "Princess Leia Organa",
      photo: LEIA_AVATAR,
      nickname: "@Leia_Organa",
    },
    content:
      "Rey is such a nice girl. #EpisodeIX #StarWarsCelebration #TheRiseOfSkywalker",
    image: LEIA_IMAGE,
    date: "12 кв.",
    actions: {
      comments: 643,
      likes: 776,
      reposts: 168,
    },
    id: 102,
  },
];
