import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/models/application-state.model';
import { requestRegistration } from '../store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  title = 'Please Log In';

  constructor(
    private fb: FormBuilder,
    private store$: Store<ApplicationState>
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: '',
      password: '',
      email: '',
    });
  }

  submit() {
    const { username, password, email } = this.registerForm.value;
    this.store$.dispatch(requestRegistration({ username, password, email }));
  }
}
