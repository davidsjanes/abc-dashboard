import { Component } from '@angular/core';
import { SidebarStateService } from 'src/app/services/navigation/sidebar-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isCompact: boolean = false;

  constructor(private sidebarStateService: SidebarStateService) {}

  resizeSidebar() {
    this.isCompact = !this.isCompact;
    this.sidebarStateService.setSidebarMinimized(this.isCompact);
  }

}
