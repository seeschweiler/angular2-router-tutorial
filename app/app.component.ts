import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {FirstComponent} from './first.component';
import {SecondComponent} from './second.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>My First Angular 2 App</h1>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Routing and Navigation</h3>
        </div>
        <div class="panel-body">
          <ul class="nav nav-tabs">
            <li role="presentation">
              <a [routerLink]="['Route1']">First Component</a>
            </li>
            <li role="presentation">
              <a [routerLink]="['Route2', {id: 1}]">Second Component</a>
            </li>
          </ul>

          <router-outlet></router-outlet>
        </div>
      </div>
      `,
      directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/route1', name:'Route1', component: FirstComponent, useAsDefault: true},
  {path:'/route2/:id', name: 'Route2', component: SecondComponent}
])
export class AppComponent { }
