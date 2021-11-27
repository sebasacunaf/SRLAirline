import { Component, OnInit } from '@angular/core';
import { ReservacionesService } from 'src/app/services/Reservaciones.service'; 
import { FacturaService } from '../../services/Factura.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-cliente-reservacion',
  templateUrl: './cliente-reservacion.component.html',
  styleUrls: ['./cliente-reservacion.component.css']
})
export class ClienteReservacionComponent implements OnInit {

  Reservaciones: any = [];
  Reserva: any=[];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private reservacionesService: ReservacionesService,private router: Router, private facturaService: FacturaService) { }

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
  createFactura(id:string): void{
    this.reservacionesService.getById(id).subscribe((res:any)=>{
      console.log(id);
      this.Reserva = this.Reserva.filter((Reserva: any) => Reserva._id !== id);
    });
    const ID_Reservacion = this.Reserva._id;
    const NumeroFactura = '1';
    console.log(this.Reserva);
    const Descripcion = 'Cliente: '+this.Reserva.ID_Usuario.Nombre +' '+ this.Reserva.ID_Usuario.Apellidos+'\n'+'Usuario: '+this.Reserva.ID_Usuario.Usuario+'\n'+'Asientos: '+this.Reserva.CantidadAsientos ;
    const TotalColones = this.Reserva.ID_Vuelo.ID_Avion.ID_Horario.Precio * this.Reserva.CantidadAsientos ;
    const TotalDolares = TotalColones * 639.89;
    const Fecha = Date.now();
    this.facturaService.create(ID_Reservacion, NumeroFactura, Descripcion, TotalColones, TotalDolares, Fecha.toString()).subscribe(
      data => {
        console.log(data);
        if(data.success){
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/dashboard/home-factura']);
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