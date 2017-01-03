import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../../environments/firebase.config';
import { DatabaseComponent } from './database.component';
@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  exports: [DatabaseComponent]
  ,
  declarations: [DatabaseComponent]
})
export class DatabaseModule { }
