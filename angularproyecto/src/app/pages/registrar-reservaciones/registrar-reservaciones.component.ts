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

  NumeroFactura:any;
  Descripcion:any;
  TotalColones:any;
  TotalDolares:any;
  Fecha:any;

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
        this.IDReservacion=  data.Reserva._id
        this.getReserva(this.IDReservacion);
      },
    );

  
  }
  getReserva(id: string): void {
    console.log('ReservaID '+id);
    this.reservacionesService.getById(id).subscribe((data) => {
      console.log('DATAAAAAA '+data._id);

      ///this.Reserva = this.Reserva.filter((Reserva: any) => Reserva._id !== id);

      this.NumeroFactura = data.numReservacion;
      this.Descripcion = 'Cliente: ' + data.ID_Usuario.Nombre + ' ' + data.ID_Usuario.Apellidos + '\n' + 'Usuario: ' + data.ID_Usuario.Usuario + '\n' + 'Asientos: ' + data.CantidadAsientos;
      this.TotalColones = 100 * data.CantidadAsientos;
      this.TotalDolares = this.TotalColones * 639.89;
      this.Fecha = Date.now();

      this.createFactura();
      
   });

  }
  createFactura():void{
    this.facturaService.create(this.IDReservacion, this.NumeroFactura, this.Descripcion, this.TotalColones, this.TotalDolares, this.Fecha.toString()).subscribe(
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
  }








}
