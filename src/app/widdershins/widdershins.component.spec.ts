import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiddershinsComponent } from './widdershins.component';

describe('WiddershinsComponent', () => {
  let component: WiddershinsComponent;
  let fixture: ComponentFixture<WiddershinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiddershinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WiddershinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
