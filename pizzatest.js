
  class Pizza {

    constructor() {
      this._size = null;
    }

    set size(size) {
      if (size === 's' || size === 'm' || size === 'l') {
        this._size = size;
      }
    }

    get size() {
      return this._size;
    }
  }
  
  let pizza = new Pizza();
  pizza.size = 'm';
  console.log(pizza.size);