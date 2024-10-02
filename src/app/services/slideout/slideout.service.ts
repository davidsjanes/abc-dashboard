import { Injectable, ComponentRef} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SlideoutComponent } from 'src/app/components/shared/slideout/slideout.component';

@Injectable({
  providedIn: 'root'
})

export class SlideoutService {
  private overlayRef: OverlayRef;
  private componentRef: ComponentRef<SlideoutComponent>;
  isCompact: boolean;

  constructor(private overlay: Overlay) {}

  open(component: any, cssClasses: string[] = [], title: any = 'Title', type: any = 'nav', position: any = 'left', hasHeader: boolean = true): void {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'slideout-backdrop',
      panelClass: cssClasses,
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    const portal = new ComponentPortal(SlideoutComponent, null, null);
    this.componentRef = this.overlayRef.attach(portal);

    this.componentRef.instance.title = title;
    this.componentRef.instance.type = type;
    this.componentRef.instance.position = position;
    this.componentRef.instance.childComponentType = component;
    this.componentRef.instance.closeSlideout.subscribe(() => this.disposeOverlay());
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