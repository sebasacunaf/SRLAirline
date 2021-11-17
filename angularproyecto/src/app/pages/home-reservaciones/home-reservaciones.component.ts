import { Component, OnInit } from '@angular/core';
import { ReservacionesService } from 'src/app/services/Reservaciones.service'; 
@Component({
  selector: 'app-home-reservaciones',
  templateUrl: './home-reservaciones.component.html',
  styleUrls: ['./home-reservaciones.component.css']
})
export class HomeReservacionesComponent implements OnInit {

  Reservaciones: any = [];
  constructor(private reservacionesService: ReservacionesService) { }

  ngOnInit(): void {
    this.reservacionesService.get().subscribe((Reservaciones)=>{this.Reservaciones = Reservaciones});
    console.log(this.Reservaciones);
  }
  
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere borrar esta reservación?')) {
      this.reservacionesService.delete(id).subscribe((res: any) => {
        this.Reservaciones = this.Reservaciones.filter((Reservacion: any) => Reservacion._id !== id);
      });
    }
  }
}
