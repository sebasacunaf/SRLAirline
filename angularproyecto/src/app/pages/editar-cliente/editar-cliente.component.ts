import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/Usuario.service'
import { TokenStorageService } from '../../services/token-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(private token: TokenStorageService, private usuarioService: UsuarioService,private activatedRoute:ActivatedRoute, private router: Router) { }
 
 
  commentForm = new FormGroup({
   ID: new FormControl('', Validators.required),
    Usuario: new FormControl('', Validators.required),
    Contrasenna: new FormControl('', Validators.required),
    Nombre: new FormControl('', Validators.required),
    Apellidos: new FormControl('', Validators.required),
    Celular: new FormControl('', Validators.required),
    TelefonoTrabajo: new FormControl('', Validators.required),
    Correo: new FormControl('', Validators.required), 
    FechaNacimiento: new FormControl('', Validators.required),
    Descripcion: new FormControl('', Validators.required),
    Estado: new FormControl('', Validators.required)
  });
  
  id:any;
  currentUsuario:any;
 
  ngOnInit(): void {
    this.currentUsuario = this.token.getUser().user;
    console.log(this.currentUsuario);
   

      this.commentForm.setValue({ 
        ID: this.currentUsuario.ID,
        Usuario:this.currentUsuario.Usuario,
        Contrasenna: "",
        Nombre: this.currentUsuario.Nombre,
        Apellidos: this.currentUsuario.Apellidos,
        Celular: this.currentUsuario.Celular,
        TelefonoTrabajo: this.currentUsuario.TelefonoTrabajo,
        Correo: this.currentUsuario.Correo,
        FechaNacimiento: this.currentUsuario.FechaNacimiento,
        Descripcion: this.currentUsuario.Descripcion,
        Estado: this.currentUsuario.Estado
       })
  
  }

  submitForm() {
    if (this.commentForm.valid) {
      console.log(this.commentForm.value, 'this.commentForm.value');
      this.usuarioService.delete(this.currentUsuario.ID, this.commentForm.value).subscribe()
       
    }
    this.router.navigate(['/dashboard/cliente']);
  }
}
