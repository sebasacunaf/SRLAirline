import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegistrarAvionComponent } from './pages/registrar-avion/registrar-avion.component';
import { RegistrarHorarioComponent } from './pages/registrar-horario/registrar-horario.component';
import { RegistrarRutaComponent } from './pages/registrar-ruta/registrar-ruta.component';
import { RegistrarTipoAvionComponent } from './pages/registrar-tipo-avion/registrar-tipo-avion.component';
import { RegistrarFacturaComponent } from './pages/registrar-factura/registrar-factura.component';
import { RegistrarReservacionesComponent } from './pages/registrar-reservaciones/registrar-reservaciones.component';
import { RegistrarVuelosComponent } from './pages/registrar-vuelos/registrar-vuelos.component';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { EditarVuelosComponent } from './pages/editar-vuelos/editar-vuelos.component';
import { EditarFacturaComponent } from './pages/editar-factura/editar-factura.component';
import { EditarReservacionesComponent } from './pages/editar-reservaciones/editar-reservaciones.component';
import { EditarTipoAvionComponent } from './pages/editar-tipo-avion/editar-tipo-avion.component';
import { EditarHorarioComponent } from './pages/editar-horario/editar-horario.component';
import { EditarRutaComponent } from './pages/editar-ruta/editar-ruta.component';
import { EditarAvionComponent } from './pages/editar-avion/editar-avion.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeUsuarioComponent } from './pages/home-usuario/home-usuario.component';
import { HomeAvionComponent } from './pages/home-avion/home-avion.component';
import { HomeTipoAvionComponent } from './pages/home-tipo-avion/home-tipo-avion.component';
import { HomeHorarioComponent } from './pages/home-horario/home-horario.component';
import { HomeRutaComponent } from './pages/home-ruta/home-ruta.component';
import { HomeVuelosComponent } from './pages/home-vuelos/home-vuelos.component';
import { HomeReservacionesComponent } from './pages/home-reservaciones/home-reservaciones.component';
import { HomeFacturaComponent } from './pages/home-factura/home-factura.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { EditarClienteComponent } from './pages/editar-cliente/editar-cliente.component';
import { ClienteFacturaComponent } from './pages/cliente-factura/cliente-factura.component';
import { ClienteReservacionComponent } from './pages/cliente-reservacion/cliente-reservacion.component';
import { ClienteVuelosComponent } from './pages/cliente-vuelos/cliente-vuelos.component';
import { MensajeComponent } from './pages/mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    RegistrarAvionComponent,
    RegistrarHorarioComponent,
    RegistrarRutaComponent,
    RegistrarTipoAvionComponent,
    RegistrarFacturaComponent,
    RegistrarReservacionesComponent,
    RegistrarVuelosComponent,
    RegistrarUsuarioComponent,
    EditarUsuarioComponent,
    EditarVuelosComponent,
    EditarFacturaComponent,
    EditarReservacionesComponent,
    EditarTipoAvionComponent,
    EditarHorarioComponent,
    EditarRutaComponent,
    EditarAvionComponent,
    HomeUsuarioComponent,
    HomeAvionComponent,
    HomeTipoAvionComponent,
    HomeHorarioComponent,
    HomeRutaComponent,
    HomeVuelosComponent,
    HomeReservacionesComponent,
    HomeFacturaComponent,
    ClienteComponent,
    EditarClienteComponent,
    ClienteFacturaComponent,
    ClienteReservacionComponent,
    ClienteVuelosComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
