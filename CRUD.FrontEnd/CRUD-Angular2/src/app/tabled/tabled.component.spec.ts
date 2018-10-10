
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledComponent } from './tabled.component';

describe('TabledComponent', () => {
  let component: TabledComponent;
  let fixture: ComponentFixture<TabledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
