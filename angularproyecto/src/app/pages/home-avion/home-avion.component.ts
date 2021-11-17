import { Component, OnInit } from '@angular/core';
import { AvionService } from 'src/app/services/Avion.service'; 
@Component({
  selector: 'app-home-avion',
  templateUrl: './home-avion.component.html',
  styleUrls: ['./home-avion.component.css']
})
export class HomeAvionComponent implements OnInit {
  Aviones: any = [];
  constructor(private avionService: AvionService) { }

  ngOnInit(): void {
    this.avionService.get().subscribe((Aviones)=>{this.Aviones = Aviones});
    console.log(this.Aviones);
  }
  
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere borrar este avión?')) {
      this.avionService.delete(id).subscribe((res: any) => {
        this.Aviones = this.Aviones.filter((Avion: any) => Avion._id !== id);
      });
    }
  }
}
