import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ClienteFacturaComponent } from './pages/cliente-factura/cliente-factura.component';
import { ClienteReservacionComponent } from './pages/cliente-reservacion/cliente-reservacion.component';
import { ClienteVuelosComponent } from './pages/cliente-vuelos/cliente-vuelos.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { EditarAvionComponent } from './pages/editar-avion/editar-avion.component';
import { EditarClienteComponent } from './pages/editar-cliente/editar-cliente.component';
import { EditarFacturaComponent } from './pages/editar-factura/editar-factura.component';
import { EditarHorarioComponent } from './pages/editar-horario/editar-horario.component';
import { EditarReservacionesComponent } from './pages/editar-reservaciones/editar-reservaciones.component';
import { EditarRutaComponent } from './pages/editar-ruta/editar-ruta.component';
import { EditarTipoAvionComponent } from './pages/editar-tipo-avion/editar-tipo-avion.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { EditarVuelosComponent } from './pages/editar-vuelos/editar-vuelos.component';
import { HomeAvionComponent } from './pages/home-avion/home-avion.component';
import { HomeFacturaComponent } from './pages/home-factura/home-factura.component';
import { HomeHorarioComponent } from './pages/home-horario/home-horario.component';
import { HomeReservacionesComponent } from './pages/home-reservaciones/home-reservaciones.component';
import { HomeRutaComponent } from './pages/home-ruta/home-ruta.component';
import { HomeTipoAvionComponent } from './pages/home-tipo-avion/home-tipo-avion.component';
import { HomeUsuarioComponent } from './pages/home-usuario/home-usuario.component';
import { HomeVuelosComponent } from './pages/home-vuelos/home-vuelos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MensajeComponent } from './pages/mensaje/mensaje.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegistrarAvionComponent } from './pages/registrar-avion/registrar-avion.component';
import { RegistrarFacturaComponent } from './pages/registrar-factura/registrar-factura.component';
import { RegistrarHorarioComponent } from './pages/registrar-horario/registrar-horario.component';
import { RegistrarReservacionClienteComponent } from './pages/registrar-reservacion-cliente/registrar-reservacion-cliente.component';
import { RegistrarReservacionesComponent } from './pages/registrar-reservaciones/registrar-reservaciones.component';
import { RegistrarRutaComponent } from './pages/registrar-ruta/registrar-ruta.component';
import { RegistrarTipoAvionComponent } from './pages/registrar-tipo-avion/registrar-tipo-avion.component';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';
import { RegistrarVuelosComponent } from './pages/registrar-vuelos/registrar-vuelos.component';

import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = 
[
  {path:'',
  children: [
    {path:'',component: HomeComponent},
    {path:'login',component: LoginComponent},
    {path:'register',component: RegisterComponent},
    {path:'about',component: AboutComponent},
    {path:'mensaje',component: MensajeComponent},
  ],
}, 
{
  path: 'dashboard',
  canActivate: [AuthGuard],
  children: [
  {path:'admin',component: AdminComponent},
  {path:'cliente',component: ClienteComponent},
  {path:'registrar-reservacion-cliente',component: RegistrarReservacionClienteComponent},
  {path:'cliente-factura',component: ClienteFacturaComponent},
  {path:'cliente-reservacion',component: ClienteReservacionComponent},
  {path:'cliente-vuelos',component: ClienteVuelosComponent},
  {path:'editar-cliente',component: EditarClienteComponent},
  {path:'registrar-usuario',component: RegistrarUsuarioComponent},
  {path:'registrar-avion',component: RegistrarAvionComponent},
  {path:'registrar-tipo-avion',component: RegistrarTipoAvionComponent},
  {path:'registrar-horario',component:RegistrarHorarioComponent},
  {path:'registrar-ruta',component: RegistrarRutaComponent},
  {path:'registrar-vuelos',component: RegistrarVuelosComponent},
  {path:'registrar-reservaciones',component: RegistrarReservacionesComponent},
  {path:'registrar-factura',component: RegistrarFacturaComponent},
  {path:'editar-usuario/:id',component: EditarUsuarioComponent},
  {path:'editar-avion/:id',component: EditarAvionComponent},
  {path:'editar-tipo-avion/:id',component: EditarTipoAvionComponent},
  {path:'editar-horario/:id',component:EditarHorarioComponent},
  {path:'editar-ruta/:id',component: EditarRutaComponent},
  {path:'editar-vuelos',component: EditarVuelosComponent},
  {path:'editar-reservaciones',component: EditarReservacionesComponent},
  {path:'editar-factura/:id',component: EditarFacturaComponent},
  {path:'home-usuario',component: HomeUsuarioComponent},
  {path:'home-avion',component: HomeAvionComponent},
  {path:'home-tipo-avion',component: HomeTipoAvionComponent },
  {path:'home-horario',component: HomeHorarioComponent },
  {path:'home-ruta',component: HomeRutaComponent},
  {path:'home-vuelos',component: HomeVuelosComponent },
  {path:'home-reservaciones',component: HomeReservacionesComponent },
  {path:'home-factura',component: HomeFacturaComponent},
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
