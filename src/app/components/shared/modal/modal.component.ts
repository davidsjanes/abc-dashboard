import { Component, Inject, Input, ViewChild, ViewContainerRef, EventEmitter, Output, AfterViewInit, OnInit, OnDestroy, ComponentRef, Injector } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';
import { MODAL_DATA } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modalAnimate', [
      state('in', style({ 
        transform: '{{ enterPosition }}', 
        opacity: '{{ enterOpacity }}',
        scale: '{{ enterScale }}'
      }),
        {
          params:
          { 
            enterPosition: '',
            leavePosition: '',
            enterOpacity: '',
            leaveOpacity: '',
            enterScale: '',
            leaveScale: '' 
          }
        }),
      state('out', style({ 
        transform: '{{ leavePosition }}', 
        opacity: '{{ leaveOpacity }}',
        scale: '{{ leaveScale }}'  
      }),
        {
          params:
          { 
            enterPosition: '',
            leavePosition: '',
            enterOpacity: '',
            leaveOpacity: '',
            enterScale: '',
            leaveScale: '' 
          }
        }
      ),
      transition(':enter', [
        style({ 
          transform: '{{ leavePosition }}', 
          opacity: '{{ leaveOpacity }}',
          scale: '{{ leaveScale }}'
        }),
        animate('500ms ease', style({ 
          transform: '{{ enterPosition }}', 
          opacity: '{{ enterOpacity }}',
          scale: '{{ enterScale }}'
        })
      ),
    ]),
      transition('in => out', [
        animate('500ms ease-out')
      ])
    ]
  )]
})

export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() childComponentType: any;
  @Output() closeModal = new EventEmitter<void>();
  @ViewChild('modalContent', { read: ViewContainerRef, static: false }) modalContent!: ViewContainerRef;
  @Input() type: 'window' | 'panel' = 'window';
  @Input() size: 'medium' | 'small' | 'large' = 'medium';
  @Input() position: 'left' | 'right' | 'center' = 'left';

  modalPosition = '';
  modalSize = '';
  modalType = '';
  endPosition = '';

  animationState: 'in' | 'out' = 'in';
  private componentRef!: ComponentRef<any>;

  public get classes(): string[] {
    return ['modal', `${this.type}`, `modal--${this.size}`, `${this.type}--${this.position}`];
  }
  
  constructor(@Inject(MODAL_DATA) public data: any, private injector: Injector) {}

  ngOnInit(): void {
    this.modalPosition = this.position.toString(); 
    this.modalSize = this.size.toString(); 
    this.modalType = this.type.toString();

    if (this.modalPosition === 'left') {
      this.endPosition = 'translateX(-100%)';
    } else if (this.modalPosition === 'right') {
      this.endPosition = 'translateX(100%)';
    } else {this.endPosition = 'translateX(0)'}
  }

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
        console.log('modalContent is defined');
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