import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { AngularReactBrowserModule } from '@angular-react/core';
import { FabDialogModule, FabButtonModule } from '@angular-react/fabric';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ AngularReactBrowserModule, FabButtonModule, FabDialogModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
