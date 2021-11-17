import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/Usuario.service'
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  id!: string | null;

  
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
  constructor(private usuarioService: UsuarioService,private activatedRoute:ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.id = this. activatedRoute.snapshot.paramMap.get('id');
  }

  
}
