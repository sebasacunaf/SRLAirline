import { Component, OnInit } from '@angular/core';
import { HorarioService } from 'src/app/services/Horario.service'; 
@Component({
  selector: 'app-home-horario',
  templateUrl: './home-horario.component.html',
  styleUrls: ['./home-horario.component.css']
})
export class HomeHorarioComponent implements OnInit {

  Horarios: any = [];
  constructor(private horarioService: HorarioService) { }

  ngOnInit(): void {
    this.horarioService.get().subscribe((Horarios)=>{this.Horarios = Horarios});
    console.log(this.Horarios);
  }
  
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere cambiar el estado de este horario?')) {
      var Horario: any;
      for (const horario of this.Horarios) {
        if (horario._id == id) {
          Horario = horario;
        }
      }
      if(Horario.Estado == 1){
        Horario.Estado = 0;
      }
     else{
      Horario.Estado = 1;
     }
      this.horarioService.delete(id, Horario).subscribe((res: any) => {
        //  this.Usuarios = this.Usuarios.filter((usuario: any) => usuario._id !== id);

      });
    }
  }
}
