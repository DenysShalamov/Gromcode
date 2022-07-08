class Order {
  constructor(price, city, type) {
    this.dateCreated = new Date();
    this.id = '123123';
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.price = price;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
    }
    this.dateConfirmed = new Date();
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

const order1 = new Order(1200, 'Kyiv', 'Buy');
console.log(order1);
order1.confirmOrder();
