import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EyePicker } from './eye-picker';

describe('EyePicker', () => {
  let component: EyePicker;
  let fixture: ComponentFixture<EyePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyePicker],
    }).compileComponents();

    fixture = TestBed.createComponent(EyePicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
