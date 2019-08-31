
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './events-app.component';
import { AppHeaderComponent} from './header/app-header.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import {EventService} from './events/shared/event.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
