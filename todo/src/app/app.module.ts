import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { CreateNewDialogComponent } from './list/create-new-dialog.component';

import { TaskService } from './task.service';
import { ListService } from './list/list.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'list/:id', component: ListComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    NotFoundComponent,
    CreateNewDialogComponent
  ],
  entryComponents: [
    CreateNewDialogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, TaskService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
