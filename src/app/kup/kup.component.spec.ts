import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupComponent } from './kup.component';

describe('KupComponent', () => {
  let component: KupComponent;
  let fixture: ComponentFixture<KupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
