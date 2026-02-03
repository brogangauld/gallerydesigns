import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAccordion } from './services-accordion';

describe('ServicesAccordion', () => {
  let component: ServicesAccordion;
  let fixture: ComponentFixture<ServicesAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesAccordion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesAccordion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
