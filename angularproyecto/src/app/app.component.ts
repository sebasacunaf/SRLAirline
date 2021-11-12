import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproyecto';

  //Atributos para la autenticación
  private roles='';
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  Usuario: string = '';

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.isLoggedIn, 'this.isLoggedIn');
    if (this.isLoggedIn) {
      const { user } = this.tokenStorageService.getUser();
      this.roles = user.ID_Rol;
      this.Usuario = user.Usuario;
      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
     // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      console.log(this.Usuario, 'this.Usuario');
    }
  }

  get isUserAuthenticated(): any {
    return this.tokenStorageService.getToken;
  }
  get UsuarioValue(): any {
    const { user } = this.tokenStorageService.getUser();
    return user.Usuario;
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }




}
