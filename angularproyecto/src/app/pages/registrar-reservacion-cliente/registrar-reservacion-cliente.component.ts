import { Component, OnInit } from '@angular/core';
import { ReservacionesService } from '../../services/Reservaciones.service'
import { VuelosService } from '../../services/Vuelos.service'
import { UsuarioService } from '../../services/Usuario.service'
import { FacturaService } from '../../services/Factura.service'
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service'
@Component({
  selector: 'app-registrar-reservacion-cliente',
  templateUrl: './registrar-reservacion-cliente.component.html',
  styleUrls: ['./registrar-reservacion-cliente.component.css']
})
export class RegistrarReservacionClienteComponent implements OnInit {
  form: any = {
    ID_Vuelo: null,
    currentUser:null,
    CantidadAsientos: null
  };
  Vuelos: any = [];
  //Usuarios: any = [];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  currentUser: any;
  numReservacion = 1;
  constructor(private token: TokenStorageService,private reservacionesService: ReservacionesService,private router: Router, private vuelosService: VuelosService, private usuarioService: UsuarioService, private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.vuelosService.get().subscribe((Vuelos)=>{this.Vuelos = Vuelos});
   // this.usuarioService.get().subscribe((Usuarios)=>{this.Usuarios = Usuarios});
    this.currentUser = this.token.getUser().user;
    console.log(this.currentUser);
  }
  onSubmit(): void {
    const { ID_Vuelo, CantidadAsientos} = this.form;

    this.reservacionesService.create(ID_Vuelo, this.currentUser.ID,this.numReservacion, CantidadAsientos).subscribe(
      data => {
        console.log(data);
        if(data.success){
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/dashboard/cliente']);
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
