//* i know better understand of spread oparator

// *rest operator

const totalFriends = (...friends: string[]) => {
  friends.forEach((friend) => console.log(friend.slice(0, 1)));
};

totalFriends("murad", "nowshad", "muaz", "momshad");
