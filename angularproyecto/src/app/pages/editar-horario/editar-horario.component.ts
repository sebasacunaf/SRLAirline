import { ActivatedRoute, Router } from '@angular/router';
import { HorarioService } from '../../services/Horario.service'
import { TokenStorageService } from '../../services/token-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../services/Ruta.service'
@Component({
  selector: 'app-editar-horario',
  templateUrl: './editar-horario.component.html',
  styleUrls: ['./editar-horario.component.css']
})
export class EditarHorarioComponent implements OnInit {

  constructor(private token: TokenStorageService, private horarioService: HorarioService,private activatedRoute:ActivatedRoute, private router: Router,private rutaService: RutaService) { }


  commentForm = new FormGroup({
    ID_Ruta: new FormControl('', Validators.required),
    Dia: new FormControl('', Validators.required),
    HoraSalida: new FormControl('', Validators.required),
    HoraLlegada: new FormControl('', Validators.required),
    Precio: new FormControl('', Validators.required),
  });

  id:any;
  currentUsuario:any;
  Rutas: any = [];

  ngOnInit(): void {
    this.rutaService.get().subscribe((Rutas)=>{this.Rutas = Rutas});
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.horarioService.getByID(this.id).subscribe((data) => {

      this.commentForm.setValue({ 
        ID_Ruta: data.ID_Ruta,
        Dia: data.Dia,
        HoraSalida: data.HoraSalida,
        HoraLlegada: data.HoraLlegada,
        Precio: data.Precio
       })
       console.log(data);
    });
    
  }
  submitForm() {
    if (this.commentForm.valid) {
      console.log(this.commentForm.value, 'this.commentForm.value');
      this.horarioService.update(this.id, this.commentForm.value).subscribe()
       
    }
    this.router.navigate(['/dashboard/home-horario']);
  }

}
