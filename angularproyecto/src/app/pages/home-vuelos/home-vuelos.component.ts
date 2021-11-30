import { Component, OnInit } from '@angular/core';
import { VuelosService } from 'src/app/services/Vuelos.service'; 
@Component({
  selector: 'app-home-vuelos',
  templateUrl: './home-vuelos.component.html',
  styleUrls: ['./home-vuelos.component.css']
})
export class HomeVuelosComponent implements OnInit {

  Vuelos: any = [];
  constructor(private vuelosService: VuelosService) { }

  ngOnInit(): void {
    this.vuelosService.get().subscribe((Vuelos)=>{this.Vuelos = Vuelos});
    console.log(this.Vuelos);
  }
  
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere cambiar el estado de este vuelo?')) {
      var Vuelo: any;
      for (const vuelo of this.Vuelos) {
        if (vuelo._id == id) {
          Vuelo = vuelo;
        }
      }
      if(Vuelo.Estado == 1){
        Vuelo.Estado = 0;
      }
     else{
      Vuelo.Estado = 1;
     }
      this.vuelosService.delete(id, Vuelo).subscribe((res: any) => {
        //  this.Usuarios = this.Usuarios.filter((usuario: any) => usuario._id !== id);

      });
    }
  }

}
