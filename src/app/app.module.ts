import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PackageLunchComponent } from './package-lunch/package-lunch.component';
import { PackageListComponent } from './package-lunch/package-list/package-list.component';
import { PackageDetailsComponent } from './package-lunch/package-details/package-details.component';
import { PackageItemComponent } from './package-lunch/package-list/package-item/package-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackageLunchComponent,
    PackageListComponent,
    PackageDetailsComponent,
    PackageItemComponent,
    FoodListComponent,
    FoodEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
