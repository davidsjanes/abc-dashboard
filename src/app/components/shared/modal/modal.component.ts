import { Component, Inject, Input, OnDestroy, ViewChild, ViewContainerRef, EventEmitter, Output, OnInit, ComponentFactoryResolver } from '@angular/core';
import { MODAL_DATA } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    // add animations here
  ]
})

export class ModalComponent implements OnInit, OnDestroy {
  @Input() childComponentType: any;
  @Output() closeModal = new EventEmitter<void>();
  @ViewChild('modalContent', { read: ViewContainerRef, static: true }) modalContent: ViewContainerRef;

  constructor(
    @Inject(MODAL_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.modalContent.clear();
    const componentRef = this.modalContent.createComponent(this.childComponentType);
    Object.assign(componentRef.instance, this.data); // Pass data to the created component instance
  }

  ngOnDestroy(): void {
    this.modalContent.clear();
  }

  onBackdropClick(): void {
    this.closeModal.emit();
  }
}