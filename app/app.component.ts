import { Component } from '@angular/core';

@Component({
    selector: 'flight-app',
    template: `
        
        <h1>Dynamic Component Demo</h1>
            
        <div class="container" style="margin-top:50px">   
            <dashboard></dashboard>
        </div>
        
    `
})
export class AppComponent {
}