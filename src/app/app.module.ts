import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PushNotificationsModule } from 'ng-push';
import { MyreminderComponent } from './myreminder/myreminder.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DataService } from './service/dataservice';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MyreminderComponent,
    SecondComponent,
    PagenotfoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PushNotificationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // AngularFontAwesomeModule


  ],
  providers: [CookieService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
