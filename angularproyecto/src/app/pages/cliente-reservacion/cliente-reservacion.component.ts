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
  
  
}
