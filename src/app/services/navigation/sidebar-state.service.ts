import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SidebarStateService {
  // BehaviorSubject to keep track of whether the sidebar is minimized
  private isSidebarMinimizedSubject = new BehaviorSubject<boolean>(false);
  isSidebarMinimized$ = this.isSidebarMinimizedSubject.asObservable();

  // Method to update the sidebar state
  setSidebarMinimized(isMinimized: boolean) {
    this.isSidebarMinimizedSubject.next(isMinimized);
  }
}
