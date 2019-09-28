import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SidenavModule } from '../shared/directives/sidenav/sidenav.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, SidenavModule],
  exports: [NavbarComponent]
})
export class LayoutModule {}
