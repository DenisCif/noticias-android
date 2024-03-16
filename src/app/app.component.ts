import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuhtService } from './service/auth/auht.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router, private authService: AuhtService) { }

  goBack(): void {
    this.router.navigate(['/']);
  }

  cerrarSesion() {
    this.authService.logout();
    sessionStorage.setItem("logout", "true");
    this.router.navigate(['/signin']);
  }
}
