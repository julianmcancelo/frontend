import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private autenticacionService: AutenticacionService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.autenticacionService.login(this.loginForm.value).subscribe(
        (res) => {
          console.log('Usuario logueado exitosamente', res);
          // Aquí podrías redirigir al usuario o guardar el token
        },
        (err) => {
          console.error('Error en el login', err);
        }
      );
    }
  }
}
