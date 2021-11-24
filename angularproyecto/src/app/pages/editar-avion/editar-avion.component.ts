import { AvionService } from '../../services/Avion.service'
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../../services/Horario.service'
import { TipoAvionService } from '../../services/TipoAvion.service'

@Component({
  selector: 'app-editar-avion',
  templateUrl: './editar-avion.component.html',
  styleUrls: ['./editar-avion.component.css']
})
export class EditarAvionComponent implements OnInit {

  constructor(private token: TokenStorageService, private avionService: AvionService,private activatedRoute:ActivatedRoute, private router: Router,private horarioService: HorarioService, private tipoAvionService: TipoAvionService) { }


  commentForm = new FormGroup({
    ID_TipoAvion: new FormControl('', Validators.required),
    ID_Horario: new FormControl('', Validators.required),
    CodigoAvion: new FormControl('', Validators.required)
  });

  id:any;
  currentUsuario:any;
  TipoAviones: any = [];
  Horarios: any = [];

  ngOnInit(): void {
    this.tipoAvionService.get().subscribe((TipoAviones)=>{this.TipoAviones = TipoAviones});
    this.horarioService.get().subscribe((Horarios)=>{this.Horarios = Horarios});
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.avionService.getByID(this.id).subscribe((data) => {

      this.commentForm.setValue({ 
        ID_TipoAvion: data.ID_TipoAvion,
        ID_Horario: data.ID_Horario,
        CodigoAvion: data.CodigoAvion
       })
       console.log(data);
    });
    
  }
  submitForm() {
    if (this.commentForm.valid) {
      console.log(this.commentForm.value, 'this.commentForm.value');
      this.avionService.update(this.id, this.commentForm.value).subscribe()
       
    }
    this.router.navigate(['/dashboard/home-avion']);
  }


}
