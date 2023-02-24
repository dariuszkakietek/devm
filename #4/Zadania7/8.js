class Order {
  constructor(id, price, name) {
    this.id = id;
    this.price = price;
    this.name = name;
  }
}

const basket = new Map();

basket.set(1, new Order(1, 3, "Ogórek"));
basket.set(2, new Order(2, 4, "Pomidor"));
basket.set(3, new Order(3, 5, "Sałata"));
basket.set(4, new Order(4, 6, "Jabłko"));
basket.set(5, new Order(5, 7, "Gruszka"));

console.log(basket);
