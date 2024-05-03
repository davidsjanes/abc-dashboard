import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNavComponent } from './site-nav.component';

describe('SiteNavComponent', () => {
  let component: SiteNavComponent;
  let fixture: ComponentFixture<SiteNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteNavComponent]
    });
    fixture = TestBed.createComponent(SiteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
