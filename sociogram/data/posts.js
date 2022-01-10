import { users } from "./users";

export const posts = [
  {
    imageurl:
      "https://image.shutterstock.com/image-vector/funny-cow-cartoon-character-hsppy-600w-543005692.jpg",
    user: users[0].user,
    likes: 7870,
    caption:
      "train Ride to HogWarts. kzhchskhfhfio weuhfshdjcvhsk chvekuerfyiqw ehfksdjhvh asgjkfgsd jfgaskhg dfjasytgfj sdgdfawe yfgasjdhc.",
    profile_picture: users[0].image,
    comments: [
      {
        user: "AbhijitMahajan",
        comment:
          "WOW! Looks Good!!!! I am learning react native, its awesome and very easy to learn.",
      },
      {
        user: "BhushanMahajan",
        comment: "Noice!!!",
      },
    ],
  },
  {
    imageurl:
      "https://image.shutterstock.com/image-vector/funny-cow-cartoon-character-hsppy-600w-543005692.jpg",
    user: users[0].user,
    likes: 7870,
    caption: "train Ride to HogWarts.",
    profile_picture: users[0].image,
    comments: [
      {
        user: "AbhijitMahajan",
        comment: "WOW! Looks Good!!!!",
      },
      {
        user: "BhushanMahajan",
        comment: "Noice!!!",
      },
    ],
  },
];
