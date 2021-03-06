import { SetLocationPageModule } from './../pages/set-location/set-location.module';
import { SignupPageModule } from './../pages/signup/signup.module';
import { ShopInfoPageModule } from './../pages/shop-info/shop-info.module';
import { DisplayService } from './../services/display.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ShopsListPageModule } from '../pages/shops-list/shops-list.module';
import { CitiesPageModule } from '../pages/cities/cities.module';
import { BeersListPageModule } from '../pages/beers-list/beers-list.module';
import { BeerInfoPageModule } from '../pages/beer-info/beer-info.module';
import { CommentService } from '../services/comment.service';
import { ManagmentPageModule } from '../pages/managment/managment.module';
import { AuthService } from '../services/auth.service';
import { ManageBeerPageModule } from '../pages/manage-beer/manage-beer.module';
import { ManagmentService } from '../services/managment.service';
import { UploadService } from '../services/upload-file.service';
import { SigninPageModule } from '../pages/signin/signin.module';
import { LoadingService } from '../services/loading.service';
import { StartPageModule } from '../pages/start/start.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ShopsListPageModule,
    CitiesPageModule,
    ShopInfoPageModule,
    BeersListPageModule,
    BeerInfoPageModule,
    ManagmentPageModule,
    ManageBeerPageModule,
    SigninPageModule,
    SignupPageModule,
    SetLocationPageModule,
    StartPageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCaiVcBBX_s3_eymLcuwpIc1dDuc03JFxY",
      authDomain: "craft-beer-9033d.firebaseapp.com",
      databaseURL: "https://craft-beer-9033d.firebaseio.com",
      projectId: "craft-beer-9033d",
      storageBucket: "craft-beer-9033d.appspot.com",
      messagingSenderId: "299241268802"
    }),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [
    IonicApp
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    DisplayService,
    CommentService,
    ManagmentService,
    UploadService,
    LoadingService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  entryComponents: [
    MyApp
  ]
})

export class AppModule { }
