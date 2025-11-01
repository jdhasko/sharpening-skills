export class Customer {
  constructor(id, name, country, orders = []) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.orders = orders;
  }
}

export class Order {
  constructor(id, amount, date = "25-10-2025") {
    this.id = id;
    (this.amount = amount), (this.date = date);
  }
}

// class customer {
//     id:Number,
//     name:String,
//     country:String,
//     orders:[Number]
// }

export const customers = [
  new Customer(1, "Josh Stones", "USA", [1, 3, 5]),
  new Customer(2, "Emili Jensen", "DK", [6, 7]),
  new Customer(3, "Ellen Hart", [2, 4]),
];

export const orders = [
  new Order(7, 3),
  new Order(6, 6),
  new Order(5, 12, "12-10-2025"),
  new Order(4, 8, "11-10-2025"),
  new Order(3, 9, "10-10-2025"),
  new Order(2, 4, "10-10-2025"),
  new Order(1, 5, "10-10-2025"),
];
