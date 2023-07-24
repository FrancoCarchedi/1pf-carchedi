import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiTituloSize]',
})
export class MiTituloSizeDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // Aplicar el estilo de tamaño de letra 20 al elemento
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '20px');
  }

}
