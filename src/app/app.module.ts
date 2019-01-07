import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { StreamingMedia } from '@ionic-native/streaming-media';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { VideoProvider } from '../providers/video/video';

@NgModule({
  declarations: [
    MyApp,
    HomePage,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileTransfer,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideoProvider
  ]
})
export class AppModule {}
