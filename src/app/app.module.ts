// Angular base
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// Pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { PrivatePageComponent } from './pages/private-page/private-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// PrimeNG
import { AccordionModule } from 'primeng/accordion';   
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
// import { MenuItem } from 'primeng/api'; 
// Guards
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { InitAuthGuard } from './guards/init-auth.guard';

const routes: Routes = [ { path: '', component: HomeComponent, canActivate: [InitAuthGuard] },
  { path: 'login',  component: LoginPageComponent, canActivate: [RequireAnonGuard] },
  { path: 'signup',  component: SignupPageComponent, canActivate: [RequireAnonGuard] },
  { path: 'private',  component: PrivatePageComponent, canActivate: [RequireUserGuard] },
  { path: '**', redirectTo:'' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    SignupPageComponent,
    PrivatePageComponent,
    HomePageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    AccordionModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenuModule,
    // MenuItem 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
