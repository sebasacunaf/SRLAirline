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
    if (confirm('¿Esta seguro que quiere borrar este Tipo de Avión?')) {
      this.tipoAvionService.delete(id).subscribe((res: any) => {
        this.TipoAviones = this.TipoAviones.filter((TipoAvion: any) => TipoAvion._id !== id);
      });
    }
  }
}
