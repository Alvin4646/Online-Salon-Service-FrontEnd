import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonServiceComponent } from './salon-service.component';

describe('SalonServiceComponent', () => {
  let component: SalonServiceComponent;
  let fixture: ComponentFixture<SalonServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
