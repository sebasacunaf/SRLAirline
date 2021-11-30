import { Component, OnInit } from '@angular/core';
import { VuelosService } from 'src/app/services/Vuelos.service'; 

@Component({
  selector: 'app-cliente-vuelos',
  templateUrl: './cliente-vuelos.component.html',
  styleUrls: ['./cliente-vuelos.component.css']
})
export class ClienteVuelosComponent implements OnInit {

  Vuelos: any = [];
  constructor(private vuelosService: VuelosService) { }

  ngOnInit(): void {
    this.vuelosService.get().subscribe((Vuelos)=>{this.Vuelos = Vuelos});
    console.log(this.Vuelos);
  }
  
 

}
