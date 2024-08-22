import { Component, Input, ElementRef, HostListener, TemplateRef, ViewContainerRef, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Overlay, OverlayRef, ConnectedPosition, ScrollDispatcher } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})

export class OverlayComponent implements OnDestroy, AfterViewInit {
  
  @Input() text: string = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() type: 'popover' | 'tooltip' | 'dropdown' = 'popover';
  @Input() trigger: 'hover' | 'click' = 'hover';
  @Input() contentTemplate?: TemplateRef<any>; 

  @ViewChild('overlayTemplate', { static: true }) overlayTemplate!: TemplateRef<any>;

  private overlayRef: OverlayRef | null = null;
  private scrollSubscription: Subscription | null = null;
  private documentClickSubscription: Subscription | null = null;

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private scrollDispatcher: ScrollDispatcher
  ) {}

  ngAfterViewInit(): void {
    this.scrollSubscription = this.scrollDispatcher.scrolled().subscribe(() => {
      if (this.overlayRef && this.overlayRef.hasAttached()) {
        this.overlayRef.updatePosition();
      }
    });
    if (this.trigger === 'click') {
      this.documentClickSubscription = fromEvent<MouseEvent>(document, 'click')
        .pipe(
          filter(event => !this.elementRef.nativeElement.contains(event.target))
        )
        .subscribe(() => this.hide());
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (this.trigger === 'click') {
      event.stopPropagation(); // Prevent click event from propagating
      if (this.overlayRef && this.overlayRef.hasAttached()) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.trigger === 'hover') {
      this.show();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.trigger === 'hover') {
      this.hide();
    }
  }

  private show(): void {
    if (!this.overlayRef) {
      this.overlayRef = this.createOverlay();
    }
    const portal = new TemplatePortal(this.overlayTemplate, this.viewContainerRef);
    this.overlayRef.attach(portal);
  }

  private hide(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }

  private createOverlay(): OverlayRef {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.elementRef)
      .withFlexibleDimensions(false)
      .withViewportMargin(5)
      .withPositions(this.getConnectedPosition());
  
    return this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
  }

  private getConnectedPosition(): ConnectedPosition[] {
    const positions: ConnectedPosition[] = [];
    if (this.position === 'top') {
      positions.push({
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -5,
      });
    } else if (this.position === 'bottom') {
      positions.push({
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: 5,
      });
    } else if (this.position === 'left') {
      positions.push({
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
        offsetX: -5,
      });
    } else if (this.position === 'right') {
      positions.push({
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
        offsetX: 5,
      });
    }
    return positions;
  }
  
  ngOnDestroy(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
    if (this.documentClickSubscription) {
      this.documentClickSubscription.unsubscribe();
    }
  }

  public get classes(): string[] {
    return ['overlay', `overlay--${this.type}`, `overlay--${this.position}`];
  }
}
