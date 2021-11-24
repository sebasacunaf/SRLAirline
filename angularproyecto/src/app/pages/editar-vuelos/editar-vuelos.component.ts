import { Component, OnInit } from '@angular/core';
import { VuelosService } from '../../services/Vuelos.service'
import { TokenStorageService } from '../../services/token-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editar-vuelos',
  templateUrl: './editar-vuelos.component.html',
  styleUrls: ['./editar-vuelos.component.css']
})
export class EditarVuelosComponent implements OnInit {

  constructor(private token: TokenStorageService, private vueloService: VuelosService,private activatedRoute:ActivatedRoute, private router: Router) { }


  commentForm = new FormGroup({
    ID_Avion: new FormControl('', Validators.required),
    CodigoVuelo: new FormControl('', Validators.required),
    Descripcion: new FormControl('', Validators.required),
    Origen: new FormControl('', Validators.required),
    Destino: new FormControl('', Validators.required),
    FechaIda: new FormControl('', Validators.required),
    FechaRegreso: new FormControl('', Validators.required),
    EspaciosDisponibles: new FormControl('', Validators.required)
  });

  id:any;
  currentUsuario:any;

  ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.vueloService.getByID(this.id).subscribe((data) => {

      this.commentForm.setValue({ 
        ID_Avion: data.ID_Ruta,
        CodigoVuelo: data.CodigoVuelo,
        Descripcion: data.Descripcion,
        Origen: data.Origen,
        Destino: data.Destino,
        FechaIda: data.FechaIda,
        FechaRegreso: data.FechaRegreso,
        EspaciosDisponibles: data.EspaciosDisponibles
       })
       console.log(data);
    });
    
  }
  submitForm() {
    if (this.commentForm.valid) {
      console.log(this.commentForm.value, 'this.commentForm.value');
      this.vueloService.update(this.id, this.commentForm.value).subscribe()
       
    }
    this.router.navigate(['/dashboard/home-horario']);
  }
}
