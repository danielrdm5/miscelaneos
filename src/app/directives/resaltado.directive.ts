import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef) {
    
   }
   @Input("appResaltado") nuevoColor:string;
   
  @HostListener('mouseenter') mouseEntro(){
    this.el.nativeElement.style.backgroundColor = 'green';
  }
  
  @HostListener('mouseleave') mouseSalio(){
    this.el.nativeElement.style.backgroundColor = 'gray';
  }



}
