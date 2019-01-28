import { Directive, ElementRef, Input, Renderer, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appActiveOn]'
})
export class ActiveOnDirective implements OnInit, OnDestroy {

  @Input() appActiveOn = 'click';
  private dispose: Function;

  constructor(
    private element: ElementRef,
    private renderer: Renderer
  ) { }

  public ngOnInit(): void {
    this.dispose = this.renderer
      .listen(
        this.element.nativeElement,
        this.appActiveOn,
        this.toggle.bind(this)
      );
  }

  public ngOnDestroy() {
    this.dispose();
  }

  private toggle(): void {
    this.element.nativeElement.classList.toggle('active');
  }
}
