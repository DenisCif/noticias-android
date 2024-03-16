import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuhtService } from 'src/app/service/auth/auht.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading: boolean = false; // Variable para controlar la visibilidad del spinner

  constructor(private formBuilder: FormBuilder, private authService: AuhtService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get nombre() {
    return this.registerForm.get('nombre');
  }

  get apellido() {
    return this.registerForm.get('apellido');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  signup(): void {
    if (this.registerForm.valid) {
      const { nombre, apellido, email, password } = this.registerForm.value;
      this.loading = true;
      this.authService.signup(nombre, apellido, email, password).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error al registrarte:', error);
        }
      ).add(() => {
        this.loading = false;
      });
    }
  }
}
