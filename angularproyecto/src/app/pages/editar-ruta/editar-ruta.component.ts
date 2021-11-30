import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RutaService } from '../../services/Ruta.service'
import { TokenStorageService } from '../../services/token-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-ruta',
  templateUrl: './editar-ruta.component.html',
  styleUrls: ['./editar-ruta.component.css']
})
export class EditarRutaComponent implements OnInit {

  constructor(private token: TokenStorageService, private rutaService: RutaService,private activatedRoute:ActivatedRoute, private router: Router) { }


  commentForm = new FormGroup({
    Ruta: new FormControl('', Validators.required),
    Duracion: new FormControl('', Validators.required),
    Estado: new FormControl('', Validators.required)
  });

  id:any;
  currentUsuario:any;

  ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.rutaService.getByID(this.id).subscribe((data) => {

      this.commentForm.setValue({ 
        Ruta: data.Ruta,
        Duracion: data.Duracion, 
        Estado : data.Estado
       })
       console.log(data);
    });
    
  }
  submitForm() {
    if (this.commentForm.valid) {
      console.log(this.commentForm.value, 'this.commentForm.value');
      this.rutaService.update(this.id, this.commentForm.value).subscribe()
       
    }
    this.router.navigate(['/dashboard/home-ruta']);
  }
}
