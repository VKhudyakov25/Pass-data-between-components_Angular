import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content-template',
  templateUrl: './content-template.component.html',
  styleUrls: ['./content-template.component.css'],
})
export class ContentTemplateComponent {
  @Input() text!: string;
  @Output() textChange = new EventEmitter<string>();

  valChange(event: any) {
    this.text = event.value;
    this.textChange.emit(this.text);
  }
}
