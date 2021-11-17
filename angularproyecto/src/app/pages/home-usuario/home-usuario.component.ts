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
    this.usuarioService.get().subscribe((Usuarios)=>{this.Usuarios = Usuarios});
    console.log(this.Usuarios);
  }
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere borrar este usuario?')) {
      this.usuarioService.delete(id).subscribe((res: any) => {
        this.Usuarios = this.Usuarios.filter((usuario: any) => usuario._id !== id);
      });
    }
  }
}
