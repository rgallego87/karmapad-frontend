// Angular base
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListTextsComponent } from './components/list-texts/list-texts.component';
import { E404PageComponent } from './pages/e404-page/e404-page.component';
import { TextCardComponent } from './components/text-card/text-card.component';
// Pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateTextPageComponent } from './pages/create-text-page/create-text-page.component';
import { TextDetailsPageComponent } from './pages/text-details-page/text-details-page.component';
// PrimeNG
import { AccordionModule } from 'primeng/accordion';   
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
// Guards
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { InitAuthGuard } from './guards/init-auth.guard';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [ { path: '', component: HomePageComponent, canActivate: [InitAuthGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuard] },
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAnonGuard] },
  { path: 'texts/create', component: CreateTextPageComponent, canActivate: [RequireUserGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [RequireUserGuard] },
  { path: 'texts/:id', component: TextDetailsPageComponent },
  { path: '**', component: E404PageComponent }
]

@NgModule({
  declarations: [
    AppComponent,    
    LoginPageComponent,
    SignupPageComponent,
    ProfilePageComponent,
    HomePageComponent,
    NavbarComponent,
    E404PageComponent,
    CreateTextPageComponent,
    ListTextsComponent,
    TextCardComponent,
    TextDetailsPageComponent,
    FooterComponent,    
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
    InputTextareaModule,
    ToastModule,
    CardModule,
    PanelModule,
    ProgressBarModule            
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
