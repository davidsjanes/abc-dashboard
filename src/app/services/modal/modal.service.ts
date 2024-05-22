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

  constructor(private overlay: Overlay, private injector: Injector) {}

  open(component: any, componentData: any = {}, cssClasses: string[] = []): void {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'modal-backdrop',
      panelClass: cssClasses,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });

    const injector = this.createInjector(componentData);
    const portal = new ComponentPortal(ModalComponent, null, injector);
    const componentRef: ComponentRef<ModalComponent> = this.overlayRef.attach(portal);

    componentRef.instance.childComponentType = component;
    componentRef.instance.closeModal.subscribe(() => this.close());
  }

  private createInjector(data: any): Injector {
    return Injector.create({
      providers: [{ provide: MODAL_DATA, useValue: data }],
      parent: this.injector,
    });
  }

  close(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}


// import { Injectable, ComponentRef, Injector, Type } from '@angular/core';
// import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
// import { ComponentPortal } from '@angular/cdk/portal';

// @Injectable({
//   providedIn: 'root'
// })
// export class ModalService {
//   constructor(private overlay: Overlay, private injector: Injector) {}

//   open<T>(component: Type<T>, config?: OverlayConfig): OverlayRef {
//     const overlayConfig = this.getOverlayConfig(config);
//     const overlayRef = this.overlay.create(overlayConfig);
//     const componentPortal = new ComponentPortal(component, null, this.injector);
//     const componentRef: ComponentRef<T> = overlayRef.attach(componentPortal);

//     // Allow the component to close itself
//     componentRef.instance['close'] = () => overlayRef.detach();

//     return overlayRef;
//   }

//   private getOverlayConfig(config?: OverlayConfig): OverlayConfig {
//     return {
//       hasBackdrop: true,
//       backdropClass: 'modal__backdrop',
//       panelClass: 'modal',
//       ...config
//     };
//   }
// }
