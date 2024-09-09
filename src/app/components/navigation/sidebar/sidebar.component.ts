import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isCompact: boolean = false;

  constructor(private renderer: Renderer2) {}

  resizeSidebar() {
    if (this.isCompact) {
      this.renderer.removeClass(document.body, 'sidebar-is-compact');
    } else {
      this.renderer.addClass(document.body, 'sidebar-is-compact');
    }
    this.isCompact = !this.isCompact;
  }

}
