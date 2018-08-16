import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];  
  loading = true;
  anon: boolean;
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {}
    
    ngOnInit() {
      this.authService.userChange$.subscribe((user) => {
        this.user = user;
        this.anon = !user;
        this.loading = false;

        if (!this.loading && !!this.user) {
          this.items = [
            { label: 'My Profile', icon: 'pi pi-fw pi-user', routerLink:['/profile'] },
            { label: 'Create text', icon: 'pi pi-fw pi-pencil', routerLink:['/create'] },        
            { label: 'Logout', icon: 'pi pi-fw pi-power-off', command: () => this.logout() }            
          ];
        }
        
        if (!this.loading && this.anon) {
          this.items = [
            { label: 'Login', icon: 'pi pi-fw pi-user', routerLink:['/login'] },
            { label: 'Signup', icon: 'pi pi-fw  pi-arrow-circle-up', routerLink:['/signup'] }            
          ];
        }  
      });      
    }

    logout() {
      this.authService.logout()
        .then(() => this.router.navigate(['/login']));
    }

}
