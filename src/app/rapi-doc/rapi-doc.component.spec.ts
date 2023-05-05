import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapiDocComponent } from './rapi-doc.component';

describe('RapiDocComponent', () => {
  let component: RapiDocComponent;
  let fixture: ComponentFixture<RapiDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapiDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapiDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
