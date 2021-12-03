import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ReservacionesService } from 'src/app/services/Reservaciones.service'; 
import { FacturaService } from '../../services/Factura.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-reservaciones',
  templateUrl: './home-reservaciones.component.html',
  styleUrls: ['./home-reservaciones.component.css']
})
export class HomeReservacionesComponent implements OnInit {

  Reservaciones: any = [];
  Reserva: any=[];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private reservacionesService: ReservacionesService,private router: Router, private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.reservacionesService.get().subscribe((Reservaciones)=>{this.Reservaciones = Reservaciones});
  }
  
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere cambiar el estado de esta reservación?')) {
      var Reservacion: any;
      for (const reservacion of this.Reservaciones) {
        if (reservacion._id == id) {
          Reservacion = reservacion;
        }
      }
      if(Reservacion.Estado == 1){
        Reservacion.Estado = 0;
      }
     else{
      Reservacion.Estado = 1;
     }
      this.reservacionesService.delete(id, Reservacion).subscribe((res: any) => {
        //  this.Usuarios = this.Usuarios.filter((usuario: any) => usuario._id !== id);

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
