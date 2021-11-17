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
    if (confirm('¿Esta seguro que quiere borrar este horario?')) {
      this.horarioService.delete(id).subscribe((res: any) => {
        this.Horarios = this.Horarios.filter((Horario: any) => Horario._id !== id);
      });
    }
  }

}
