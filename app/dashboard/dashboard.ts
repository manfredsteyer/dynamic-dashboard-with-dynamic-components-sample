import { Component} from '@angular/core';
import {DashboardComponentA} from "./dashboard-component-a";
import {DashboardComponentB} from "./dashboard-component-b";

@Component({
    selector: 'dashboard',
    template: `
        <div *ngFor="let info of componentInfos" class="col-sm-4">
            
            <div *ngIf="info.type">
                <dashboard-component-outlet [type]="info.type" [title]="info.title" (selected)="select($event)">
                </dashboard-component-outlet>
            </div>
            
            <div *ngIf="info.html">
                <dynamic-dashboard-component [html]="info.html" [title]="info.title" (selected)="select($event)">
                </dynamic-dashboard-component>
            </div>
            
        </div>
        
        <div class="col-sm-12">&nbsp;</div>
        
        <div *ngIf="selectedComponent" class="col-sm-12">
            <b>Selected: </b> {{ selectedComponent.title }}
        </div>
    `
})
export class Dashboard {

    private componentInfos = [
        {
            type: DashboardComponentA,
            title: '1st Component'
        },
        {
            type: DashboardComponentB,
            title: '2nd Component'
        },
        {
            html: `
                <div style="background-color:orange; padding:20px">
                    <h2>{{title}} (Dynamic)</h2>
                    <p>This is a dynamic component with a dynamic template</p>
                    <p>
                    <button (click)="select()" class="btn btn-default">Select</button>
                    </p>
                </div>
            `,
            title: '3rd Component'
        },
        {
            html: `
                <div style="background-color:lightskyblue; padding:20px">
                    <h2>{{title}} (Dynamic)</h2>
                    <p>This is a dynamic component with a dynamic template</p>
                    <p>
                    <button (click)="select()" class="btn btn-default">Select</button>
                    </p>
                </div>
            `,
            title: '4th Component'
        }

    ];

    selectedComponent: Dashboard;

    select(selected) {
        this.selectedComponent = selected;
    }

}