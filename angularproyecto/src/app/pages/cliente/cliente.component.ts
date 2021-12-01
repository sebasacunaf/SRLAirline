import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/Usuario.service'
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private token: TokenStorageService, private usuarioService: UsuarioService) { }
  id:any;
  currentUsuario:any;
  ngOnInit(): void {

  }

}
