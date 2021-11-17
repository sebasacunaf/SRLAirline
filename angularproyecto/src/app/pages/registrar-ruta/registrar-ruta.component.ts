import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../services/Ruta.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-ruta',
  templateUrl: './registrar-ruta.component.html',
  styleUrls: ['./registrar-ruta.component.css']
})
export class RegistrarRutaComponent implements OnInit {

  form: any = {
    Ruta: null,
    Duracion: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private rutaService: RutaService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { Ruta, Duracion} = this.form;

    this.rutaService.create(Ruta, Duracion).subscribe(
      data => {
        console.log(data);
        if(data.success){
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/dashboard/home-ruta']);
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
