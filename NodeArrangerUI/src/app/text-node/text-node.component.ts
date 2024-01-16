import { Component, Input } from '@angular/core';
import { TextNode } from '../models/textnode';

@Component({
  selector: 'na-text-node',
  templateUrl: './text-node.component.html',
  styleUrl: './text-node.component.css'
})
export class TextNodeComponent {
  @Input() node: TextNode = {
    id: 0,
    text: 'error',
    position: -1
  }
}
