import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EditarAvionComponent } from './pages/editar-avion/editar-avion.component';
import { EditarFacturaComponent } from './pages/editar-factura/editar-factura.component';
import { EditarHorarioComponent } from './pages/editar-horario/editar-horario.component';
import { EditarReservacionesComponent } from './pages/editar-reservaciones/editar-reservaciones.component';
import { EditarRutaComponent } from './pages/editar-ruta/editar-ruta.component';
import { EditarTipoAvionComponent } from './pages/editar-tipo-avion/editar-tipo-avion.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { EditarVuelosComponent } from './pages/editar-vuelos/editar-vuelos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegistrarAvionComponent } from './pages/registrar-avion/registrar-avion.component';
import { RegistrarFacturaComponent } from './pages/registrar-factura/registrar-factura.component';
import { RegistrarHorarioComponent } from './pages/registrar-horario/registrar-horario.component';
import { RegistrarReservacionesComponent } from './pages/registrar-reservaciones/registrar-reservaciones.component';
import { RegistrarRutaComponent } from './pages/registrar-ruta/registrar-ruta.component';
import { RegistrarTipoAvionComponent } from './pages/registrar-tipo-avion/registrar-tipo-avion.component';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';
import { RegistrarVuelosComponent } from './pages/registrar-vuelos/registrar-vuelos.component';



const routes: Routes = [
  {path:'',component: HomeComponent}, 
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'about',component: AboutComponent},
  {path:'admin',component: AdminComponent},
  {path:'registrar-usuario',component: RegistrarUsuarioComponent},
  {path:'registrar-avion',component: RegistrarAvionComponent},
  {path:'registrar-tipo-avion',component: RegistrarTipoAvionComponent},
  {path:'registrar-horario',component:RegistrarHorarioComponent},
  {path:'registrar-ruta',component: RegistrarRutaComponent},
  {path:'registrar-vuelos',component: RegistrarVuelosComponent},
  {path:'registrar-reservaciones',component: RegistrarReservacionesComponent},
  {path:'registrar-factura',component: RegistrarFacturaComponent},
  {path:'editar-usuario',component: EditarUsuarioComponent},
  {path:'editar-avion',component: EditarAvionComponent},
  {path:'editar-tipo-avion',component: EditarTipoAvionComponent},
  {path:'editar-horario',component:EditarHorarioComponent},
  {path:'editar-ruta',component: EditarRutaComponent},
  {path:'editar-vuelos',component: EditarVuelosComponent},
  {path:'editar-reservaciones',component: EditarReservacionesComponent},
  {path:'editar-factura',component: EditarFacturaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
