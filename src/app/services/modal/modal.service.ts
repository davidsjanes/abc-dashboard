import { Injectable, Injector, ComponentRef, InjectionToken } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';

export const MODAL_DATA = new InjectionToken<any>('MODAL_DATA');

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  private overlayRef: OverlayRef;
  private componentRef: ComponentRef<ModalComponent>;

  constructor(private overlay: Overlay, private injector: Injector) {}

  open(component: any, componentData: any = {}, cssClasses: string[] = [], type: any = 'default', size: any = 'default', position: any = 'left', title: any = 'Title', confirmText: any = 'Save'): void {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'modal-backdrop',
      panelClass: cssClasses,
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    const injector = this.createInjector(componentData);
    const portal = new ComponentPortal(ModalComponent, null, injector);
    this.componentRef = this.overlayRef.attach(portal);

    this.componentRef.instance.childComponentType = component;
    this.componentRef.instance.type = type;
    this.componentRef.instance.size = size;
    this.componentRef.instance.position = position;
    this.componentRef.instance.title = title;
    this.componentRef.instance.confirmText = confirmText;
    this.componentRef.instance.closeModal.subscribe(() => this.disposeOverlay());
  }

  private createInjector(data: any): Injector {
    return Injector.create({
      providers: [{ provide: MODAL_DATA, useValue: data }],
      parent: this.injector,
    });
  }

  close(): void {
    if (this.componentRef) {
      this.componentRef.instance.close();
    }
  }

  private disposeOverlay(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}