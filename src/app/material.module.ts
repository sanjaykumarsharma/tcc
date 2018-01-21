import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule
      } from '@angular/material';

@NgModule({
  imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule
  ],
  exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
