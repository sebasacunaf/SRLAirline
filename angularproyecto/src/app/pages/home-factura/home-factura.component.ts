import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/Factura.service'; 
@Component({
  selector: 'app-home-factura',
  templateUrl: './home-factura.component.html',
  styleUrls: ['./home-factura.component.css']
})
export class HomeFacturaComponent implements OnInit {

  Facturas: any = [];
  constructor(private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.facturaService.get().subscribe((Facturas)=>{this.Facturas = Facturas});
    console.log(this.Facturas);
  }
  
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere cambiar el estado de la factura?')) {
      var Factura: any;
      for (const fact of this.Facturas) {
        if (fact._id == id) {
          Factura = fact;
        }
      }
      if(Factura.Estado == 1){
        Factura.Estado = 0;
      }
     else{
      Factura.Estado = 1;
     }
      this.facturaService.delete(id, Factura).subscribe((res: any) => {
        //  this.Usuarios = this.Usuarios.filter((usuario: any) => usuario._id !== id);

      });
    }
  }
}
