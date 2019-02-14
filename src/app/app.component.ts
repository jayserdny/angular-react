import { Component } from '@angular/core';
import { DialogType } from 'office-ui-fabric-react/lib/Dialog';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  DialogType = DialogType;

  name = 'Angular-React';
  dialogHidden = true;
  counter = 0;

  toggleDialog() {
    this.dialogHidden = !this.dialogHidden;
  }

  incrementCounter() {
    this.counter += 1;
  }
}
