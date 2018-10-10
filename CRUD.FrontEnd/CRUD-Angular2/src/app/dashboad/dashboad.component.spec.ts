
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadComponent } from './dashboad.component';

describe('DashboadComponent', () => {
  let component: DashboadComponent;
  let fixture: ComponentFixture<DashboadComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
