import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/Factura.service'; 
import { TokenStorageService } from '../../services/token-storage.service'

@Component({
  selector: 'app-cliente-factura',
  templateUrl: './cliente-factura.component.html',
  styleUrls: ['./cliente-factura.component.css']
})
export class ClienteFacturaComponent implements OnInit {

  Facturas: any = [];
  constructor(private token: TokenStorageService, private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.facturaService.getByUsuario(this.token.getUser().user.ID).subscribe((Facturas)=>{this.Facturas = Facturas});
    console.log(this.Facturas);
  }

}



