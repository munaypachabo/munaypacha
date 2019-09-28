import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SidenavModule } from '../shared/directives/sidenav/sidenav.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, SidenavModule],
  exports: [NavbarComponent]
})
export class LayoutModule {}
