import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {
  TabsComponent,
  ListComponent,
  ItemComponent
} from './';

import {StarWarsService} from './star-wars.service';
import {LogService} from './log.service';
import {CreateCharacterComponent} from './create-character/create-character.component';
import {HeaderComponent} from './header/header.component';
import {HttpModule} from '@angular/http';


const routes = [
  {
    path: 'characters', component: TabsComponent, children: [
      {path: '', redirectTo: 'all', pathMatch: 'full'},
      {path: ':side', component: ListComponent}
    ]
  },
  {path: 'new-character', component: CreateCharacterComponent},
  // {path: '**', component: TabsComponent}
  {path: '**', redirectTo: '/characters'}
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
