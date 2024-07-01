import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart';

  totalPrice:number = 0;
  groceryItems = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Apple',
      price: 30,
      origin_price: 30,
      description: 'Lorem, ipsum dolo',
      quantity: 1
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Banana',
      price: 40,
      origin_price: 40,
      description: 'Lorem, ipsum dolo',
      quantity: 1
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Carrot',
      price: 20,
      origin_price: 20,
      description: 'Lorem, ipsum dolo',
      quantity: 1
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Carrot',
      price: 20,
      origin_price: 20,
      description: 'Lorem, ipsum dolo',
      quantity: 1
    }
  ];
secondpart: boolean = false;

  increaseQuantity(item: any) {
    item.quantity++;

    item.price = item.quantity * item.origin_price;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.price = item.quantity * item.origin_price;

    }
  }
  

  getTotalPrice(): number {
    let totalPrice = 0;
    for (let item of this.groceryItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  }
  view(){
    this.secondpart = !this.secondpart;
    
  }

  updateQuantity(item: any, event: any) {
    const inputValue = event.target.value;
    const Quntity = parseInt(inputValue, 10); 

    if (!isNaN(Quntity) && Quntity > 0) {
      item.quantity = Quntity;
    } else {
      item.quantity = 1;
    }
  }

  Total(item: any): number {
    return item.price * item.quantity;
  }
}
