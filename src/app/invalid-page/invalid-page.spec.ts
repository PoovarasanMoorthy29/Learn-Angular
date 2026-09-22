import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvalidPage } from './invalid-page';

describe('InvalidPage', () => {
  let component: InvalidPage;
  let fixture: ComponentFixture<InvalidPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvalidPage],
    }).compileComponents();

    fixture = TestBed.createComponent(InvalidPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
