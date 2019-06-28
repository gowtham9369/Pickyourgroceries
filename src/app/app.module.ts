// Dependency injection
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule} from "angular-6-datatable";
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// list of component that as been used in this project
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ReportsComponent } from './reports/reports.component';
import { NotificationComponent } from './notification/notification.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { IndividualmerchantorderstatusComponent } from './individualmerchantorderstatus/individualmerchantorderstatus.component';
import { MerchantcompletedordersComponent } from './merchantcompletedorders/merchantcompletedorders.component';
import { MerchantinprogressordersComponent } from './merchantinprogressorders/merchantinprogressorders.component';
import { MerchantcancelledordersComponent } from './merchantcancelledorders/merchantcancelledorders.component';
import { SalereportsidebarComponent } from './salereportsidebar/salereportsidebar.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { NotificationsidebarComponent } from './notificationsidebar/notificationsidebar.component';
import { ProductstatusnotificationComponent } from './productstatusnotification/productstatusnotification.component';
import { MerchantbulkuploadComponent } from './merchantbulkupload/merchantbulkupload.component';

// list of services
import { LoginService } from './login/login.service';
import { UsersService } from './users/users.service';
import { MerchantService } from './merchant/merchant.service';
import { IndividualmerchantorderstatusService } from './Individualmerchantorderstatus/Individualmerchantorderstatus.service';
import { FormUploaderComponent } from './form-uploader/form-uploader.component';
import { NgxspinnerComponent } from './ngxspinner/ngxspinner.component';
import { CategoryService } from './category/category.service';
import { ProductlistService } from './productlist/productlist.service';
import { ReportsService } from './reports/reports.service';
import { AddinventoryService } from './addinventory/addinventory.service';
import { NotificationService } from './notification/notification.service';
import { OrderdetailsService } from './orderdetails/orderdetails.service';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { GetinventoryComponent } from './getinventory/getinventory.component';
import { GetinventoryService } from './getinventory/getinventory.service';
import { DashboardService } from './dashboard/dashboard.service';


const appRoutes: Routes = [
  { path: 'Login',      component: LoginComponent,data: { title: 'PYG - Login' } },
  { path: 'Dashboard',      component: DashboardComponent },
  { path: 'Category',      component: CategoryComponent },
  { path: 'Categories',      component: CategoryComponent },
  { path: 'Merchants',      component: MerchantComponent },
  { path: 'Users',      component: UsersComponent },
  { path: 'ProductList',      component: ProductlistComponent },
  { path: 'Get-All-orders-of-Individual-Merchant',      component: IndividualmerchantorderstatusComponent },
  { path: 'Get-Completed-orders-of-Individual-Merchant',      component: MerchantcompletedordersComponent },
  { path: 'Get-Canceled-orders-of-Individual-Merchant',      component: MerchantcancelledordersComponent },
  { path: 'Get-Inprogress-orders-of-Individual-Merchant',      component: MerchantinprogressordersComponent },
  { path: 'Orderdetails',      component: OrderdetailsComponent },
  { path: 'Reports',      component: ReportsComponent },
  { path: 'AddInventoryToMerchant',      component: AddinventoryComponent },
  { path: 'Notification',      component: NotificationComponent },
  { path: 'Product-Status-Notification',      component: ProductstatusnotificationComponent },
  { path: 'Getinventory',      component: GetinventoryComponent },
  { path: 'BulkUploadMerchantInventory',      component: MerchantbulkuploadComponent },
  { path: '',    redirectTo: 'Login',  pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoryComponent,
    UsersComponent,
    MerchantComponent,
    ReportsComponent,
    NotificationComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    MainmenuComponent,
    ProductlistComponent,
    IndividualmerchantorderstatusComponent,
    MerchantcompletedordersComponent,
    MerchantinprogressordersComponent,
    MerchantcancelledordersComponent,
    SalereportsidebarComponent,
    OrderdetailsComponent,
    NotificationsidebarComponent,
    ProductstatusnotificationComponent,
    FormUploaderComponent,
    NgxspinnerComponent,
    AddinventoryComponent,
    GetinventoryComponent,
	MerchantbulkuploadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    DataTableModule,NgxSpinnerModule,ChartsModule,FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
