import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersApi } from './users-api';

describe('UsersApi', () => {
  let component: UsersApi;
  let fixture: ComponentFixture<UsersApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersApi],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
