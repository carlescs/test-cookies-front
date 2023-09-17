import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCookieComponent } from './add-cookie.component';

describe('AddCookieComponent', () => {
  let component: AddCookieComponent;
  let fixture: ComponentFixture<AddCookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCookieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
