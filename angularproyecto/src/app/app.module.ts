import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { PagesComponent } from './pages/pages.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NavAComponent } from './pages/nav-a/nav-a.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PagesComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    NavAComponent,
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
    EditarAvionComponent
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
