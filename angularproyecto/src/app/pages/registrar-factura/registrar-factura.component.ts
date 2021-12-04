import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../services/Factura.service'
import { ReservacionesService } from '../../services/Reservaciones.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-factura',
  templateUrl: './registrar-factura.component.html',
  styleUrls: ['./registrar-factura.component.css']
})
export class RegistrarFacturaComponent implements OnInit {

  form: any = {
    ID_Ruta: null,
    Dia: null,
    HoraSalida: null,
    HoraLlegada: null,
    Precio: null,
  };
  Reservaciones: any = [];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private facturaService: FacturaService,private router: Router, private reservacionesService: ReservacionesService) { }

  ngOnInit(): void {
    this.reservacionesService.get().subscribe((Reservaciones)=>{this.Reservaciones = Reservaciones});
  }

  onSubmit(): void {
    const { ID_Reservacion, ID_Usuario, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion} = this.form;

    this.facturaService.create(ID_Reservacion, ID_Usuario,NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion).subscribe(
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
