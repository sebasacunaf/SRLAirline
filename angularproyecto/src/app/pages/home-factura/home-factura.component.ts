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
    if (confirm('¿Esta seguro que quiere borrar esta factura?')) {
      this.facturaService.delete(id).subscribe((res: any) => {
        this.Facturas = this.Facturas.filter((Factura: any) => Factura._id !== id);
      });
    }
  }
}
