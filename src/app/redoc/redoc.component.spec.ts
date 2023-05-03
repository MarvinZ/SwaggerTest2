import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedocComponent } from './redoc.component';

describe('RedocComponent', () => {
  let component: RedocComponent;
  let fixture: ComponentFixture<RedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
