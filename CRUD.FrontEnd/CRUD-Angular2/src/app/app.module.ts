import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import {MatButtonModule, MatInputModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { DashboadComponent } from './dashboad/dashboad.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TabledComponent } from './tabled/tabled.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboadComponent,
    TabledComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
