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
    numReservacion: null,
    CantidadAsientos: null
  };
  Vuelos: any = [];
  Usuarios: any = [];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private reservacionesService: ReservacionesService,private router: Router, private vuelosService: VuelosService, private usuarioService: UsuarioService, private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.vuelosService.get().subscribe((Vuelos)=>{this.Vuelos = Vuelos});
    this.usuarioService.get().subscribe((Usuarios)=>{this.Usuarios = Usuarios});
  }
  onSubmit(): void {
    const { ID_Vuelo, ID_Usuario, numReservacion, CantidadAsientos} = this.form;

    this.reservacionesService.create(ID_Vuelo, ID_Usuario, numReservacion, CantidadAsientos).subscribe(
      data => {
        console.log(data);
        if(data.success){
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/dashboard/home-reservaciones']);
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
