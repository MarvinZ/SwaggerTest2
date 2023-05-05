import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AglioComponent } from './aglio.component';

describe('AglioComponent', () => {
  let component: AglioComponent;
  let fixture: ComponentFixture<AglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AglioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
