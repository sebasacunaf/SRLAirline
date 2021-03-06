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
    this.id = this.token.getUser().user.ID;
    this.usuarioService.getByID(this.id).subscribe((data) => {
      console.log('id'+this.id)
      console.log('data'+data)
      this.commentForm.setValue({ 
        ID: data._id,
        Usuario:data.Usuario,
        Contrasenna: "",
        Nombre: data.Nombre,
        Apellidos: data.Apellidos,
        Celular: data.Celular,
        TelefonoTrabajo: data.TelefonoTrabajo,
        Correo: data.Correo,
        FechaNacimiento: data.FechaNacimiento,
        Descripcion: data.Descripcion,
        Estado: data.Estado
       })
    });
  
  }

  submitForm() {
    if (this.commentForm.valid) {
      console.log(this.commentForm.value, 'this.commentForm.value');
      this.usuarioService.delete(this.id, this.commentForm.value).subscribe()
    }
    this.router.navigate(['/dashboard/cliente']);
  }
}
