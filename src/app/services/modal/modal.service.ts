import { Injectable, ComponentRef, Injector, Type } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open<T>(component: Type<T>, config?: OverlayConfig): OverlayRef {
    const overlayConfig = this.getOverlayConfig(config);
    const overlayRef = this.overlay.create(overlayConfig);
    const componentPortal = new ComponentPortal(component, null, this.injector);
    const componentRef: ComponentRef<T> = overlayRef.attach(componentPortal);

    // Allow the component to close itself
    componentRef.instance['close'] = () => overlayRef.detach();

    return overlayRef;
  }

  private getOverlayConfig(config?: OverlayConfig): OverlayConfig {
    return {
      hasBackdrop: true,
      backdropClass: 'modal__backdrop',
      panelClass: 'modal',
      ...config
    };
  }
}
