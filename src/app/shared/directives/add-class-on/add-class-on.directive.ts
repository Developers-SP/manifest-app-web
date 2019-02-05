import { Directive, ElementRef, Renderer2, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: 'button[dirAddOn][dirAddClass]'
})
export class AddClassOnDirective implements OnInit, OnDestroy {

  @Input() dirAddClass = 'active';
  @Input() dirAddOn = 'click';
  private dispose: Function;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  public ngOnInit(): void {
    this.dispose = this.renderer
      .listen(
        this.element.nativeElement,
        this.dirAddOn,
        this.toggle.bind(this)
      );
  }

  public ngOnDestroy() {
    this.dispose();
  }

  private toggle(): void {
    this.element.nativeElement.classList.toggle(this.dirAddClass);
  }
}
