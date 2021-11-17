import { Component, OnInit } from '@angular/core';
import { RutaService } from 'src/app/services/Ruta.service'; 
@Component({
  selector: 'app-home-ruta',
  templateUrl: './home-ruta.component.html',
  styleUrls: ['./home-ruta.component.css']
})
export class HomeRutaComponent implements OnInit {
  Rutas: any = [];
  constructor(private rutaService: RutaService) { }

  ngOnInit(): void {
    this.rutaService.get().subscribe((Rutas)=>{this.Rutas = Rutas});
    console.log(this.Rutas);
  }
  
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere borrar esta ruta?')) {
      this.rutaService.delete(id).subscribe((res: any) => {
        this.Rutas = this.Rutas.filter((Ruta: any) => Ruta._id !== id);
      });
    }
  }
}
