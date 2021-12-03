import { Component, OnInit } from '@angular/core';
import { AvionService } from '../../services/Avion.service'
import { HorarioService } from '../../services/Horario.service'
import { TipoAvionService } from '../../services/TipoAvion.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar-avion',
  templateUrl: './registrar-avion.component.html',
  styleUrls: ['./registrar-avion.component.css']
})
export class RegistrarAvionComponent implements OnInit {
  form: any = {
    ID_TipoAvion: null,
    ID_Horario: null,
    CodigoAvion: null,
  };
  TipoAviones: any = [];
  Horarios: any = [];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private avionService:AvionService, private router: Router, private horarioService: HorarioService, private tipoAvionService: TipoAvionService) { }

  ngOnInit(): void {
    this.tipoAvionService.get().subscribe((TipoAviones)=>{this.TipoAviones = TipoAviones});
    this.horarioService.get().subscribe((Horarios)=>{this.Horarios = Horarios});
  }
  onSubmit(): void {
    const { ID_TipoAvion, ID_Horario, CodigoAvion } = this.form;

    this.avionService.create(ID_TipoAvion, ID_Horario, CodigoAvion).subscribe(
      data => {
        if(data.success){
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/dashboard/home-avion']);
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
