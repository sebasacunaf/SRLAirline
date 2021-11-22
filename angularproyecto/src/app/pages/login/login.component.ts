import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/Usuario.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    Usuario: null,
    Contrasenna: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles='';

  constructor(private authService: UsuarioService, private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().Rol;
    }
  }

  onSubmit(): void {
    const { Usuario, Contrasenna } = this.form;

    this.authService.login(Usuario, Contrasenna).subscribe(
      (data) => {
        console.log(data);
        if (data.success === true) {
          console.log(data.success, 'data.success');
          data.roles = data.user.role;
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().Rol;
          if (this.roles === 'Cliente') {
            this.router.navigate(['/dashboard/cliente']);
          }
          if (this.roles === 'Administrador') {
            this.router.navigate(['/dashboard/admin']);
          }
          console.log(this.roles, 'this.roles');
        } else {
          this.errorMessage = data.msg;
          this.isLoginFailed = true;
        }
      },
      (err) => {
        //console.log(err);
        this.errorMessage = err.msg;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
