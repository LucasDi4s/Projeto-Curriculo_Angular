import { Component } from '@angular/core';

@Component({
  selector: 'appAng',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class appC {
  currentItem = 'Teclado';
  currentnum = 5;

  items = ['Monitor', 'Mouse', 'Teclado', 'Cabo'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
