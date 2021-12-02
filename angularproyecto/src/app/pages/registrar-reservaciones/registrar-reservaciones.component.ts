import { Component, OnInit } from '@angular/core';
import { ReservacionesService } from '../../services/Reservaciones.service'
import { VuelosService } from '../../services/Vuelos.service'
import { UsuarioService } from '../../services/Usuario.service'
import { FacturaService } from '../../services/Factura.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-reservaciones',
  templateUrl: './registrar-reservaciones.component.html',
  styleUrls: ['./registrar-reservaciones.component.css']
})
export class RegistrarReservacionesComponent implements OnInit {
  form: any = {
    ID_Vuelo: null,
    ID_Usuario: null,
    CantidadAsientos: null
  };
  Vuelos: any = [];
  Usuarios: any = [];
  Reserva: any = [];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  numReservacion: any;
  IDReservacion: any;
  Reservaciones: any = [];
  constructor(private reservacionesService: ReservacionesService, private router: Router, private vuelosService: VuelosService, private usuarioService: UsuarioService, private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.vuelosService.get().subscribe((Vuelos) => { this.Vuelos = Vuelos });
    this.usuarioService.get().subscribe((Usuarios) => { this.Usuarios = Usuarios });

    this.reservacionesService.get().subscribe((Reservaciones) => {
      this.Reservaciones = Reservaciones;
      this.numReservacion = Reservaciones.length + 1;
      console.log("NumReservacion" + this.numReservacion);
    });
  }
  onSubmit(): void {
    const { ID_Vuelo, ID_Usuario, CantidadAsientos } = this.form;

    this.reservacionesService.create(ID_Vuelo, ID_Usuario, this.numReservacion, CantidadAsientos).subscribe(
      data => {
        console.log(data);
        this.IDReservacion = data._id;
        if (data.success) {
          this.isSuccessful = true;
          this.isSignUpFailed = false;

        } else {
          this.errorMessage = data.msg;
          this.isSignUpFailed = true;
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );

   // this.createFactura(this.IDReservacion);
  }


  createFactura(id: string): void {
    this.reservacionesService.getById(id).subscribe((res: any) => {
      console.log(id);
      this.Reserva = this.Reserva.filter((Reserva: any) => Reserva._id !== id);
      const ID_Reservacion = this.Reserva._id;
      const NumeroFactura = this.Reserva.numReservacion;
      console.log(this.Reserva);
      const Descripcion = 'Cliente: ' + this.Reserva.ID_Usuario.Nombre + ' ' + this.Reserva.ID_Usuario.Apellidos + '\n' + 'Usuario: ' + this.Reserva.ID_Usuario.Usuario + '\n' + 'Asientos: ' + this.Reserva.CantidadAsientos;
      const TotalColones = this.Reserva.ID_Vuelo.ID_Avion.ID_Horario.Precio * this.Reserva.CantidadAsientos;
      const TotalDolares = TotalColones * 639.89;
      const Fecha = Date.now();

      this.facturaService.create(ID_Reservacion, NumeroFactura, Descripcion, TotalColones, TotalDolares, Fecha.toString()).subscribe(
        data => {
          console.log(data);
          if (data.success) {
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            this.router.navigate(['/dashboard/home-factura']);
          } else {
            this.errorMessage = data.msg;
            this.isSignUpFailed = true;
          }
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );




    });

  }







}
