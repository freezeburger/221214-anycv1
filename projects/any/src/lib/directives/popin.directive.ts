import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[anyPopin]'
})
export class PopinDirective implements OnInit{

  // HostBinding : attr ou style
  // @HostBinding('attr.title') title = 'This is a Popin element !';
  @Input() popinDelay = 0;
  @HostBinding('style.transform') transform = 'scale(1)';
  @HostBinding('style.transition') transition = 'transform 0.4s ease';


  constructor() {
    console.log('PopinDirective');
  }

  ngOnInit(): void {
    
    setTimeout ( () => {
      setTimeout( () => this.transform = 'scale(1.1)' , 1000 );
      setTimeout( () => this.transform = 'scale(1)' , 1500 );
    }, this.popinDelay || 0 );

  } 

}
