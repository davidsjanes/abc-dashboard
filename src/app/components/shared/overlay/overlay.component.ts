import { Component, Input, ElementRef, HostListener, TemplateRef, ViewContainerRef, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Overlay, OverlayRef, ConnectedPosition, ScrollDispatcher } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('hidden', style({
        opacity: 0,
        scale: .8,
        visibility: 'hidden'
      })),
      state('visible', style({
        opacity: 1,
        scale: 1,
        visibility: 'visible'
      })),
      transition('hidden => visible', [
        style({ visibility: 'visible' }),
        animate('200ms ease-in')
      ]),
      transition('visible => hidden', [
        animate('200ms ease-out', style({ opacity: 0 })),
        style({ visibility: 'hidden' })
      ])
    ])
  ]
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

  tooltipVisible = false; // Track the visibility of the tooltip

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
        filter(event => this.shouldCloseOnClickOutside(event))
      )
        .subscribe(() => this.hide());
    }
  }

  private shouldCloseOnClickOutside(event: MouseEvent): boolean {
    const clickTarget = event.target as HTMLElement;
    // Check if the click target is inside the trigger element
    const clickedInsideTrigger = this.elementRef.nativeElement.contains(clickTarget);
    // Check if the click target is inside the overlay content
    const clickedInsideOverlay = this.overlayRef && this.overlayRef.overlayElement.contains(clickTarget);
    // Only close if the click is outside both the trigger and the overlay
    return !clickedInsideTrigger && !clickedInsideOverlay;
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
    this.tooltipVisible = true;
  }

  private hide(): void {
    this.tooltipVisible = false;
    setTimeout(() => {
      if (this.overlayRef) {
        this.overlayRef.detach();
      }
    }, 200); // Ensure the tooltip is fully hidden before detaching
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
        offsetY: -10,
      });
    } else if (this.position === 'bottom') {
      positions.push({
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: 10,
      });
    } else if (this.position === 'left') {
      positions.push({
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
        offsetX: -10,
      });
    } else if (this.position === 'right') {
      positions.push({
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
        offsetX: 10,
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
