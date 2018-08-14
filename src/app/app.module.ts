import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { PrivatePageComponent } from './pages/private-page/private-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
