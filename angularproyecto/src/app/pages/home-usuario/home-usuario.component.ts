import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/Usuario.service';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {
  Usuarios: any = [];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.get().subscribe((Usuarios) => { this.Usuarios = Usuarios });
    console.log(this.Usuarios);
  }
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere cambiar el estado de este usuario?')) {
      var Usuario: any;
      for (const usuario of this.Usuarios) {
        if (usuario._id == id) {
          Usuario = usuario;
        }
      }
      if(Usuario.Estado == 1){
        Usuario.Estado = 0;
      }
     else{
      Usuario.Estado = 1;
     }
      this.usuarioService.delete(id, Usuario).subscribe((res: any) => {
        //  this.Usuarios = this.Usuarios.filter((usuario: any) => usuario._id !== id);

      });
    }
  }
}
