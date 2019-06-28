import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {DataTableModule} from "angular-6-datatable";
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChartsModule } from 'ng2-charts/ng2-charts';  

// list of component that as been used in this project
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategoryComponent } from '../category/category.component';
import { UsersComponent } from '../users/users.component';
import { MerchantComponent } from '../merchant/merchant.component';
import { ReportsComponent } from '../reports/reports.component';
import { NotificationComponent } from '../notification/notification.component';
import { LoginComponent } from '../login/login.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MainmenuComponent } from '../mainmenu/mainmenu.component';
import { ProductlistComponent } from '../productlist/productlist.component';
import { IndividualmerchantorderstatusComponent } from '../individualmerchantorderstatus/individualmerchantorderstatus.component';
import { MerchantcompletedordersComponent } from '../merchantcompletedorders/merchantcompletedorders.component';
import { MerchantinprogressordersComponent } from '../merchantinprogressorders/merchantinprogressorders.component';
import { MerchantcancelledordersComponent } from '../merchantcancelledorders/merchantcancelledorders.component';
import { SalereportsidebarComponent } from '../salereportsidebar/salereportsidebar.component';
import { OrderdetailsComponent } from '../orderdetails/orderdetails.component';
import { NotificationsidebarComponent } from '../notificationsidebar/notificationsidebar.component';
import { ProductstatusnotificationComponent } from '../productstatusnotification/productstatusnotification.component';

// list of services
import { UsersService } from '../users/users.service';
import { MerchantService } from '../merchant/merchant.service';
import { FormUploaderComponent } from '../form-uploader/form-uploader.component';
import { NgxspinnerComponent } from '../ngxspinner/ngxspinner.component';
import { CategoryService } from '../category/category.service';
import { ProductlistService } from '../productlist/productlist.service';
import { ReportsService } from '../reports/reports.service';
import { IndividualmerchantorderstatusService } from '../Individualmerchantorderstatus/Individualmerchantorderstatus.service';

@NgModule({
  imports: [
    CommonModule,BrowserModule
  ],
  declarations: []
})
export class AppRoutingModule { }
