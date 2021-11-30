import { Component, OnInit } from '@angular/core';
import { TipoAvionService } from 'src/app/services/TipoAvion.service';
@Component({
  selector: 'app-home-tipo-avion',
  templateUrl: './home-tipo-avion.component.html',
  styleUrls: ['./home-tipo-avion.component.css']
})
export class HomeTipoAvionComponent implements OnInit {
  TipoAviones: any = [];
  constructor(private tipoAvionService: TipoAvionService) { }

  ngOnInit(): void {
    this.tipoAvionService.get().subscribe((TipoAviones)=>{this.TipoAviones = TipoAviones});
    console.log(this.TipoAviones);
  }
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere cambiar el estado de este tipo de avión?')) {
      var tipo: any;
      for (const tipoo of this.TipoAviones) {
        if (tipoo._id == id) {
          tipo = tipoo;
        }
      }
      if(tipo.Estado == 1){
        tipo.Estado = 0;
      }
     else{
      tipo.Estado = 1;
     }
      this.tipoAvionService.delete(id, tipo).subscribe((res: any) => {
        //  this.Usuarios = this.Usuarios.filter((usuario: any) => usuario._id !== id);

      });
    }
}
}

