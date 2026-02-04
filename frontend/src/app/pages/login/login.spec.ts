import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';
import { provideRouter, Router } from '@angular/router';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [
        provideRouter([
          { path: 'home', component: class DummyHome {} }
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should navigate to home when credentials are entered', async () => {
    spyOn(router, 'navigate');

    component.username = 'admin';
    component.password = 'admin';

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});

function spyOn(router: Router, arg1: string) {
  throw new Error('Function not implemented.');
}
