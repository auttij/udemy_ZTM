// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const nameArray = [];
array.forEach(obj => nameArray.push(`${obj.username}!`));
console.log(nameArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const questArray = array.map(obj => { return `${obj.username}?` });
console.log(questArray);

//Filter the array to only include users who are on team: red
const redArray = array.filter(obj => { return obj.team === "red" });
console.log(redArray);

//Find out the total score of all users using reduce
const totalScore = array.reduce((accum, obj) => { return accum + obj.score }, 0);
console.log(totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const ans = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(ans);

