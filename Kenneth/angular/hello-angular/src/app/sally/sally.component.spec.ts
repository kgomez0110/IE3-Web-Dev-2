import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SallyComponent } from './sally.component';

describe('SallyComponent', () => {
  let component: SallyComponent;
  let fixture: ComponentFixture<SallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
