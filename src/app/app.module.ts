import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';



import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ProductoEventsPlistComponent } from './component/producto/producto-plist/producto-events-plist.component';
import { ProductDetailComponent } from './component/producto/producto-detail/producto-detail.component';
import { NoPageFoundComponent } from './component/no-page-found/no-page-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { DialogsService } from './service/dialogs.service';
import { CryptoService } from './service/crypto.service';
import { SessionResolver } from './resolve/session.resolve';
import { SessionService } from './service/session.service';
import { MenuComponent } from './component/menu/menu.component';
import { ProductoRoutedPlistComponent } from './component/producto/producto-routed-plist/producto-routed-plist.component';
import { ProductoRoutedViewComponent } from './component/producto/producto-routed-view/producto-routed-view.component';
import { ProductoRoutedRemoveComponent } from './component/producto/producto-routed-remove/producto-routed-remove.component';
import { SnackbarService } from './service/snackbar.service';
import { ConfigService } from './service/config.service';
import { ProductoRoutedNewComponent } from './component/producto/producto-routed-new/producto-routed-new.component';
import { ProductoRoutedContainerViewComponent } from './component/producto/producto-routed-container-view/producto-routed-container-view.component';
import { ProductoViewComponent } from './component/producto/producto-view/producto-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    
    ProductoEventsPlistComponent,
    ProductoRoutedPlistComponent,
    ProductoRoutedViewComponent,
    ProductoRoutedRemoveComponent,
    ProductoRoutedNewComponent,

    ProductoRoutedContainerViewComponent,
    ProductoViewComponent,

    ProductDetailComponent,
    NoPageFoundComponent,
    LoginComponent,
    LogoutComponent,
    ConfirmDialogComponent,
    MenuComponent,
    ProductoRoutedNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,
    AppRoutingModule,

    FlexLayoutModule,

    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    

    FormsModule,
    //FormControl,
    //FormGroup,
    ReactiveFormsModule



  ],
  providers: [DialogsService, SessionResolver, SessionService, CryptoService,SnackbarService,ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
