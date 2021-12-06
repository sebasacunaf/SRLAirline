import { Component, OnInit } from '@angular/core';
import { VuelosService } from '../../services/Vuelos.service'
import { Router } from '@angular/router';

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
    const FechaI = new Date(FechaIda).toLocaleDateString();
    const FechaR = new Date(FechaRegreso).toLocaleDateString();
    this.paisO = Origen;
    this.paisD = Destino;
    this.vuelosService.getByForm(this.paisO.toUpperCase(), this.paisD.toUpperCase()).subscribe(
      data => {
        console.log("Success" + data.success);
        console.log("msg " + data.msg);
        console.log("datos: "+data.Vuelos._id)
        if (data.success) {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.Vuelos = data;
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
