import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/Usuario.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
  export class RegistrarUsuarioComponent implements OnInit {
    form: any = {
      Rol: null,
      Usuario: null,
      Contrasenna: null,
      Nombre: null,
      Apellidos: null,
      Correo: null,
      FechaNacimiento: null,
      Descripcion: null,
      Telefono: null,
      Celular: null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    constructor(private usuarioService: UsuarioService,private router: Router) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(): void {
      const { Rol, Usuario, Contrasenna, Nombre, Apellidos, Celular, Telefono, Correo, FechaNacimiento,
       Descripcion } = this.form;
  
      this.usuarioService.register(Rol, Usuario, Contrasenna, Nombre, Apellidos, Celular, Telefono, Correo, FechaNacimiento,
         Descripcion).subscribe(
        data => {
          console.log(data);
          if(data.success){
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            this.router.navigate(['/dashboard/home-usuario']);
          }else{
            this.errorMessage = data.msg;
            this.isSignUpFailed = true;
          }
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  
  }
