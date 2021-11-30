import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoAvionService } from '../../services/TipoAvion.service'
import { TokenStorageService } from '../../services/token-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-tipo-avion',
  templateUrl: './editar-tipo-avion.component.html',
  styleUrls: ['./editar-tipo-avion.component.css']
})
export class EditarTipoAvionComponent implements OnInit {

  constructor(private token: TokenStorageService, private tipoService: TipoAvionService, private activatedRoute: ActivatedRoute, private router: Router) { }


  commentForm = new FormGroup({
    Anno: new FormControl('', Validators.required),
    Modelo: new FormControl('', Validators.required),
    Marca: new FormControl('', Validators.required),
    CantidadPasajeros: new FormControl('', Validators.required),
    CantidadFilas: new FormControl('', Validators.required),
    CantidadColumnas: new FormControl('', Validators.required),
    Estado: new FormControl('', Validators.required)
  });

  id: any;
  currentUsuario: any;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.tipoService.getByID(this.id).subscribe((data) => {

      this.commentForm.setValue({
        Anno: data.Anno,
        Modelo: data.Modelo,
        Marca: data.Marca,
        CantidadPasajeros: data.CantidadPasajeros,
        CantidadFilas: data.CantidadFilas,
        CantidadColumnas: data.CantidadColumnas,
        Estado : data.Estado
      })
    });
  }
  submitForm() {
    if (this.commentForm.valid) {
      console.log(this.commentForm.value, 'this.commentForm.value');
      this.tipoService.update(this.id, this.commentForm.value).subscribe()

    }
    this.router.navigate(['/dashboard/home-tipo-avion']);
  }
}
