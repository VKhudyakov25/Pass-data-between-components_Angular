import { Component, ElementRef, ViewChild } from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isPopupVisible: boolean;
  content: string = '';

  @ViewChild('textBoxValue') textBoxValue!: ElementRef;
  constructor() {
    this.isPopupVisible = false;
  }

  @ViewChild(DxTextBoxComponent, { static: false }) textBox: DxTextBoxComponent;

  toggle(): void {
    this.isPopupVisible = !this.isPopupVisible;
    this.content = this.textBox.value;
  }
}
