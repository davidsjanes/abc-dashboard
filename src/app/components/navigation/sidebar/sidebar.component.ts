import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isCompact: boolean = false;

  resizeSidebar() {
    this.isCompact = !this.isCompact;
    console.log(this.isCompact);
  }

}
