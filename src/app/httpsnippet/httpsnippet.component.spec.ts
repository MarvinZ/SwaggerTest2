import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpsnippetComponent } from './httpsnippet.component';

describe('HttpsnippetComponent', () => {
  let component: HttpsnippetComponent;
  let fixture: ComponentFixture<HttpsnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpsnippetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpsnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
