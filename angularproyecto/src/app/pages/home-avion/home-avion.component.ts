import { Component, OnInit } from '@angular/core';
import { AvionService } from 'src/app/services/Avion.service'; 
@Component({
  selector: 'app-home-avion',
  templateUrl: './home-avion.component.html',
  styleUrls: ['./home-avion.component.css']
})
export class HomeAvionComponent implements OnInit {
  Aviones: any = [];
  constructor(private avionService: AvionService) { }

  ngOnInit(): void {
    this.avionService.get().subscribe((Aviones)=>{this.Aviones = Aviones});
    console.log(this.Aviones);
  }
  
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere cambiar el estado de este avión?')) {
      var Avion: any;
      for (const avion of this.Aviones) {
        if (avion._id == id) {
          Avion = avion;
        }
      }
      if(Avion.Estado == 1){
        Avion.Estado = 0;
      }
     else{
      Avion.Estado = 1;
     }
      this.avionService.delete(id, Avion).subscribe((res: any) => {
        //  this.Usuarios = this.Usuarios.filter((usuario: any) => usuario._id !== id);

      });
    }
  }
}
