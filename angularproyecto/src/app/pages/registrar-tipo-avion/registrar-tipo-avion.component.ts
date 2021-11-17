import { Component, OnInit } from '@angular/core';
import { TipoAvionService } from '../../services/TipoAvion.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-tipo-avion',
  templateUrl: './registrar-tipo-avion.component.html',
  styleUrls: ['./registrar-tipo-avion.component.css']
})
export class RegistrarTipoAvionComponent implements OnInit {
  form: any = {
    Anno: null,
    Modelo: null,
    Marca: null,
    CantidadPasajeros: null,
    CantidadFilas: null,
    CantidadColumnas: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private tipoavionService: TipoAvionService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { Anno, Modelo, Marca, CantidadPasajeros, CantidadFilas, CantidadColumnas } = this.form;

    this.tipoavionService.create(Anno, Modelo, Marca, CantidadPasajeros, CantidadFilas, CantidadColumnas).subscribe(
      data => {
        console.log(data);
        if(data.success){
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/dashboard/home-tipo-avion']);
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
