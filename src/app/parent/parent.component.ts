import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule,ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  // Message to send to the child
  parentMessage: string = '';

  // Message received from the child
  messageFromChild!: string;

  // Receive message from child
  receiveMessage($event: string) {
    this.messageFromChild = $event;
  }
}
