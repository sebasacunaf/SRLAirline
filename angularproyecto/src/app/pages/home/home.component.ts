import { Component, OnInit } from '@angular/core';
import { VuelosService } from '../../services/Vuelos.service'
import { Router } from '@angular/router';
import  * as moment  from 'moment/moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Vuelos: any = [];

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  paisO = '';
  paisD = '';

  form: any = {
    Origen: null,
    Destino: null,
    FechaIda: null,
    FechaRegreso: null,
  };
  constructor(private router: Router, private vuelosService: VuelosService) { }

  ngOnInit(): void {
    this.vuelosService.get().subscribe((Vuelos) => { this.Vuelos = Vuelos });
  }
  onSubmit(): void {
    const { Origen, Destino, FechaIda, FechaRegreso } = this.form;
    ///const FechaI = new Date(new Date(FechaIda).toISOString()).toLocaleDateString();
    const FechaI = moment(new Date(FechaIda)).utc().format('D/MM/yyyy');
    const FechaR = moment(new Date(FechaRegreso)).utc().format('D/MM/yyyy');
    this.paisO = Origen;
    this.paisD = Destino;
    this.vuelosService.getByForm(this.paisO.toUpperCase(), this.paisD.toUpperCase(), FechaI, FechaR).subscribe(
      data => {
        console.log("datos: ", data.Vuelos)
        this.Vuelos = data.Vuelos;
        if (data.success) {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.Vuelos = data.Vuelos;
        } else {
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
