import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class= "container">
         This is main Component !!
         <dashboard-app></dashboard-app>
        </div>
    `
})
export class AppComponent { }
