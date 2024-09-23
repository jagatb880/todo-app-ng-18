import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // Message from parent
  @Input() childMessage!: string;

  // Message to send to parent
  childInputMessage: string = '';

  // Output event to emit message to parent
  @Output() messageEvent = new EventEmitter<string>();

  // Send message to parent
  sendMessageToParent() {
    this.messageEvent.emit(this.childInputMessage);
  }
}
