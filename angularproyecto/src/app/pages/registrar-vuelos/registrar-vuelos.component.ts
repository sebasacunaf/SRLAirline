import { Component, OnInit } from '@angular/core';
import { AvionService } from '../../services/Avion.service'
import { VuelosService } from '../../services/Vuelos.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-vuelos',
  templateUrl: './registrar-vuelos.component.html',
  styleUrls: ['./registrar-vuelos.component.css']
})
export class RegistrarVuelosComponent implements OnInit {
  form: any = {
    ID_Avion: null,
    CodigoVuelo: null,
    Descripcion: null,
    Origen: null,
    Destino: null,
    FechaIda: null,
    FechaRegreso: null,
    EspaciosDisponibles: null,
  };
  Aviones: any = [];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private avionService: AvionService,private router: Router, private vuelosService: VuelosService) { }

  ngOnInit(): void {
    this.avionService.get().subscribe((Aviones)=>{this.Aviones = Aviones});
  }

  onSubmit(): void {
    const { ID_Avion, CodigoVuelo, Descripcion, Origen, Destino,FechaIda,FechaRegreso,EspaciosDisponibles} = this.form;

    this.vuelosService.create(ID_Avion, CodigoVuelo, Descripcion, Origen, Destino, FechaIda, FechaRegreso, EspaciosDisponibles).subscribe(
      data => {
        console.log(data);
        if(data.success){
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/dashboard/home-vuelos']);
        }else{
          this.errorMessage = data.msg;
          this.isSignUpFailed = true;
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
