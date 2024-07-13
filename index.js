// 1.Task: Array Filtering And Mapping
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const people = [
  { name: "Sam", age: 25, gender: "Male" },
  { name: "Bornali", age: 20, gender: "Female" },
  { name: "Suman", age: 29, gender: "Male" },
  { name: "Jack", age: 28, gender: "Male" },
  { name: "Rani", age: 18, gender: "Female" },
  { name: "Titli", age: 25, gender: "Female" },
  { name: "Sundori", age: 22, gender: "Female" },
];

const getMaleNames = (arr) => {
  const filterOutFemales = arr.filter((person) => person.gender !== "Female");
  const names = filterOutFemales.map((person) => person.name);
  return names;
};
const names = getMaleNames(people);
// console.log(names);

// 2.Task: Object Manipulation
// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  {
    title: "Web Programming",
    author: "Jack",
    year: 2024,
  },
  {
    title: "Political Thought",
    author: "Suman",
    year: 2025,
  },
  {
    title: "Social Life",
    author: "Max",
    year: 2028,
  },
];

const getBookTitles = (books) => books.map((book) => book.title);
const bookTitles = getBookTitles(books);
// console.log(bookTitles);

// 3.Task: Function Composition
// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const squareANumber = (number) => number * number;
const doubleANumber = (number) => number * 2;
const addFiveANumber = (number) => number + 5;

const combine = (number) => {
  const squareResult = squareANumber(number);
  const doubleResult = doubleANumber(squareResult);
  const addFiveResult = addFiveANumber(doubleResult);
  return addFiveResult;
};

const combineResult = combine(3);
// console.log(combineResult);

// 4.Task: Sorting Objects
// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  {
    make: "BMW",
    model: "BMW 250",
    year: 2021,
  },
  {
    make: "Audi",
    model: "Audi 009",
    year: 2022,
  },
  {
    make: "Bugatti",
    model: "Bugatti 999",
    year: 2020,
  },
  {
    make: "Ferrari",
    model: "Ferrari 333",
    year: 2015,
  },
];

const sortInAscending = (cars) => {
  return cars.sort(function (a, b) {
    return a.year - b.year;
  });
};
const sortedCars = sortInAscending(cars);
// console.log(sortedCars);

// 5.Task: Find And Modify
// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const users = [
  { name: "Sam", age: 25 },
  { name: "Suman", age: 29 },
  { name: "Jack", age: 28 },
  { name: "Rani", age: 18 },
  { name: "Titli", age: 25 },
];

const findAndModify = (users, name, newAge) => {
  const updatedUsers = [...users];
  updatedUsers.forEach((user) => {
    if (user.name === name) {
      user.age = newAge;
    }
  });
  return updatedUsers;
};
const updatedUsers = findAndModify(users, "Rani", 50);
// console.log(updatedUsers);
