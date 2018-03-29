import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { MessageComponent } from './theme/pages/default/comment/message/message.component';
import { AlertComponent } from './theme/pages/default/comment/alert/alert.component'; 
import { OrderModule } from './theme/pages/default/order/order.module';


@NgModule({
  declarations: [
    ThemeComponent,
    AppComponent,
    MessageComponent,
    AlertComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeRoutingModule,
    AuthModule,
    OrderModule
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
