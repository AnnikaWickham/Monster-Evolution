import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MouthPicker } from './mouth-picker';

describe('MouthPicker', () => {
  let component: MouthPicker;
  let fixture: ComponentFixture<MouthPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouthPicker],
    }).compileComponents();

    fixture = TestBed.createComponent(MouthPicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
