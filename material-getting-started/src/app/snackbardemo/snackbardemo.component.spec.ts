import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbardemoComponent } from './snackbardemo.component';

describe('SnackbardemoComponent', () => {
  let component: SnackbardemoComponent;
  let fixture: ComponentFixture<SnackbardemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbardemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbardemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
