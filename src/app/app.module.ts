import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {
  DxButtonModule,
  DxTextBoxModule,
  DxPopupModule,
} from 'devextreme-angular';
import { ContentTemplateComponent } from './content-template/content-template.component';

@NgModule({
  declarations: [AppComponent, ContentTemplateComponent],
  imports: [BrowserModule, DxButtonModule, DxTextBoxModule, DxPopupModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
