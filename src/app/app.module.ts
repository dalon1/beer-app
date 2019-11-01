import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component'
import { BeerListComponent } from './beer-list/beer-list.component'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // This sets the root page path
    RouterModule.forRoot([
      { path: '', component: BeerListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
