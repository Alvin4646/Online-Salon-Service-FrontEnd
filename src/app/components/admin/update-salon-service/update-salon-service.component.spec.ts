import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalonServiceComponent } from './update-salon-service.component';

describe('UpdateSalonServiceComponent', () => {
  let component: UpdateSalonServiceComponent;
  let fixture: ComponentFixture<UpdateSalonServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSalonServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSalonServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
