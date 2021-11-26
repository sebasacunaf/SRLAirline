import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../../services/Horario.service'
import { RutaService } from '../../services/Ruta.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-horario',
  templateUrl: './registrar-horario.component.html',
  styleUrls: ['./registrar-horario.component.css']
})
export class RegistrarHorarioComponent implements OnInit {
  form: any = {
    ID_Ruta: null,
    Dia: null,
    Duracion:null,
    HoraSalida: null,
    HoraLlegada: null,
    Precio: null,
  };
  Rutas: any = [];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private horarioService: HorarioService,private router: Router, private rutaService: RutaService) { }

  ngOnInit(): void {
    this.rutaService.get().subscribe((Rutas)=>{this.Rutas = Rutas});
  }

  onSubmit(): void {
    const { ID_Ruta, Dia, HoraSalida, HoraLlegada, Precio } = this.form;

    this.horarioService.create(ID_Ruta, Dia, HoraSalida, HoraLlegada, Precio).subscribe(
      data => {
        console.log(data);
        if(data.success){
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/dashboard/home-horario']);
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
