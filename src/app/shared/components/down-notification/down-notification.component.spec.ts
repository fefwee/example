import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownNotificationComponent } from './down-notification.component';

describe('DownNotificationComponent', () => {
  let component: DownNotificationComponent;
  let fixture: ComponentFixture<DownNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
