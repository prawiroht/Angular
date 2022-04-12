import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GantengComponent } from './ganteng.component';

describe('GantengComponent', () => {
  let component: GantengComponent;
  let fixture: ComponentFixture<GantengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GantengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GantengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
