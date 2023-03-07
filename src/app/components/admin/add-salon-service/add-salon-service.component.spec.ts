import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalonServiceComponent } from './add-salon-service.component';

describe('AddSalonServiceComponent', () => {
  let component: AddSalonServiceComponent;
  let fixture: ComponentFixture<AddSalonServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalonServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSalonServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
