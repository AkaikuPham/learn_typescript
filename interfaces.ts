// interface Vehicle {
//   // name: string;
//   // year: Date;
//   // broken: boolean;
//   summary(): string;
// }

interface Reporttable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`broken: ${vehicle.broken}`);
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary());
// };

// printVehicle(oldCivic);

const printSummary = (item: Reporttable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);

const drink1 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has: ${this.sugar} grams of sugar`;
  },
};
printSummary(drink1);
