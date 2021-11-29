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
    if (confirm('¿Esta seguro que quiere cambiar el estado de esta ruta?')) {
      var Rutaa: any;
      for (const ruta of this.Rutas) {
        if (ruta._id == id) {
          Rutaa = ruta;
        }
      }
      if(Rutaa.Estado == 1){
        Rutaa.Estado = 0;
      }
     else{
      Rutaa.Estado = 1;
     }
      this.rutaService.delete(id, Rutaa).subscribe((res: any) => {
        //  this.Usuarios = this.Usuarios.filter((usuario: any) => usuario._id !== id);

      });
    }
  }
}
