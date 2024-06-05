import { Component, Inject, Input, ViewChild, ViewContainerRef, EventEmitter, Output, AfterViewInit, OnDestroy, ComponentRef, Injector } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';
import { MODAL_DATA } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('slideInOutLeft', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease', style({ transform: 'translateX(0)' }))
      ]),
      transition('in => out', [
        animate('500ms ease')
      ])
    ])
  ]
})

export class ModalComponent implements AfterViewInit, OnDestroy {
  @Input() childComponentType: any;
  @Output() closeModal = new EventEmitter<void>();
  @ViewChild('modalContent', { read: ViewContainerRef, static: true }) modalContent: ViewContainerRef;
  @Input() type: 'default' | 'panel' = 'default';
  @Input() size: 'default' | 'small' | 'large' = 'default';
  @Input() position: 'left' | 'right' = 'left';

  animationState: 'in' | 'out' = 'in';
  private componentRef!: ComponentRef<any>;

  public get classes(): string[] {
    return ['modal', `modal--${this.type}`, `modal--${this.size}`, `modal--${this.position}`];
  }
  
  constructor(@Inject(MODAL_DATA) public data: any, private injector: Injector) {}

  ngAfterViewInit(): void {
    this.loadChildComponent();
  }

  ngOnDestroy(): void {
    // Clean up dynamically created component and container
    if (this.modalContent) {
      this.modalContent.clear();
    }
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private loadChildComponent(): void {
    if (this.modalContent) {
      try {
        this.modalContent.clear();
        this.componentRef = this.modalContent.createComponent(this.childComponentType, {
          injector: this.injector
        });
        Object.assign(this.componentRef.instance, this.data);
      } catch (error) {
        console.error('Error creating dynamic component:', error);
      }
    } else {
      console.error('modalContent is not defined.');
    }
  }

  closeModalInstance(): void {
    this.close();
  }

  close(): void {
    this.animationState = 'out';
  }

  onAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'out') {
      this.closeModal.emit();
    }
  }

}