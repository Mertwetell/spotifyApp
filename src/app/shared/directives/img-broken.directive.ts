import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg:string="";
@HostListener("error") handleError():void{
  const elNative=this.elHost.nativeElement;
  //elNative.src="lo que sea";
  elNative.src=this.customImg;
}

  constructor(private elHost:ElementRef) { 


  }

}
