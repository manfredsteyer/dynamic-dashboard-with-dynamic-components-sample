import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DashboardComponent } from "./dashboard-component";

@Component({
    selector: 'component-b',
    template: `
        <div style="background-color:gray; padding:20px">
            <h2>{{title}} (B)</h2>
            <p>This is a dynamic component (Type B)</p>
            <p>
            <button (click)="onSelected()" class="btn btn-default">Select</button>
            </p>
        </div>
    `
})
export class DashboardComponentB implements DashboardComponent {
    @Input() title: string;
    @Output() selected = new EventEmitter();

    onSelected() {
        this.selected.emit(this);
    }
}