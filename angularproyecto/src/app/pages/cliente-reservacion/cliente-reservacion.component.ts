import { Component, OnInit } from '@angular/core';
import { ReservacionesService } from 'src/app/services/Reservaciones.service'; 
import { FacturaService } from '../../services/Factura.service'
import { TokenStorageService } from '../../services/token-storage.service'
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
  constructor(private token: TokenStorageService,private reservacionesService: ReservacionesService,private router: Router, private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.reservacionesService.getByUsuario(this.token.getUser().user.ID).subscribe((Reservaciones)=>{this.Reservaciones = Reservaciones});

    console.log(this.Reservaciones);
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
