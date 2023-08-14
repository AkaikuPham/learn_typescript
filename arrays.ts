const carMakers = ["ford", "toyota"];
const carMakerNews: string[] = [];
const dates = [new Date(), new Date()];

// const carsByMakes = [["f150"], ["corolla"], ["camoro"]];
const carsByMakes: string[][] = [];

// Help with interface when extracting values
var car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
// const inportantDates = [new Date(), '2030-10-10'];
const importantDates: (Date | string)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
// importantDates.push(100); // error

// tuples: bộ dữ liệu
