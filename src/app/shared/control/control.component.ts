import { Component,/* HostBinding, HostListener,*/ input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()' 
  }
})
export class ControlComponent {
  // Another way to add class to a host element like 'host:' property in Component decorator (old way)
  //@HostBinding('class') className = 'control';
  
  // old way to bind event
  // @HostListener('click') onClick(){
  //   console.log('Clicked!');
  // }

  // method for event Binding for property in component decorator
  onClick(){
    console.log('Clicked!');
  }

  label = input.required<string>();
}
