import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichText } from './rich-text';

describe('RichText', () => {
  let component: RichText;
  let fixture: ComponentFixture<RichText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RichText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RichText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
