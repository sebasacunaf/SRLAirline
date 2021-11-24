import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/Usuario.service'
import { TokenStorageService } from '../../services/token-storage.service';

interface IUsuario {
  _id: string;
  Rol: string;
  Usuario: string;
  Contrasenna: string;
  Nombre: string;
  Apellidos: string;
  Celular: string;
  TelefonoTrabajo: string;
  Correo: string;
  FechaNacimiento: string;
  Descripcion: string;
}
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuario: IUsuario = {
    _id: '',
    Rol: '',
    Usuario: '',
    Contrasenna: '',
    Nombre: '',
    Apellidos: '',
    Celular: '',
    TelefonoTrabajo: '',
    Correo: '',
    FechaNacimiento: '',
    Descripcion: '',
  };

  id:any;
  currentUsuario:any;
  form: any = {
    Rol: this.usuario.Rol,
    Usuario: this.usuario.Nombre,
    Contrasenna: this.usuario.Contrasenna,
    Nombre: this.usuario.Nombre,
    Apellidos: this.usuario.Apellidos,
    Correo: this.usuario.Correo,
    FechaNacimiento: this.usuario.FechaNacimiento,
    Descripcion: this.usuario.Descripcion,
    Telefono: this.usuario.TelefonoTrabajo,
    Celular: this.usuario.Celular
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private token: TokenStorageService, private usuarioService: UsuarioService,private activatedRoute:ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.usuarioService.getByID(this.id).subscribe((data) => {
      this.usuario = data;
      console.log(this.usuario, 'this.usuario');
    });
  }
  onSubmit(): void {
    const { Rol, Usuario, Contrasenna, Nombre, Apellidos, Celular, Telefono, Correo, FechaNacimiento,
     Descripcion } = this.form;

    this.usuarioService.update(this.id, this.usuario).subscribe(
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
