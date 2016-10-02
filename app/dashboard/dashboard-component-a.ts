import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DashboardComponent } from "./dashboard-component";

@Component({
    selector: 'component-a',
    template: `
        <div style="background-color:silver; padding:20px">
            <h2>{{title}} (A)</h2>
            <p>This is a dynamic component (Type A)</p>
            <p>
            <button (click)="onSelected()" class="btn btn-default">Select</button>
            </p>
        </div>
    `
})
export class DashboardComponentA implements DashboardComponent {
    @Input() title: string;
    @Output() selected = new EventEmitter();

    onSelected() {
        this.selected.emit(this);
    }
}