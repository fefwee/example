import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAndShareComponent } from './print-and-share.component';

describe('PrintAndShareComponent', () => {
  let component: PrintAndShareComponent;
  let fixture: ComponentFixture<PrintAndShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAndShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintAndShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
