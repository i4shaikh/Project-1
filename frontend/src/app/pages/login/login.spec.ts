import { TestBed } from '@angular/core/testing';
import { Login } from './login';
import { Router } from '@angular/router';

describe('Login', () => {
  let component: Login;
  let routerMock: { navigate: (...args: any[]) => void };

  beforeEach(async () => {
    routerMock = {
      navigate: (..._args: any[]) => {}
    };

    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate to home when credentials are entered', () => {
    let calledWith: any[] | null = null;

    // override method to capture call
    routerMock.navigate = (...args: any[]) => {
      calledWith = args;
    };

    component.username = 'admin';
    component.password = 'admin';

    component.login();

    expect(calledWith).toEqual([['/home']]);
  });
});
