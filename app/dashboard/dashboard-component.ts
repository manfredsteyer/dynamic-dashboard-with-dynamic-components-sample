import { EventEmitter } from '@angular/core'


export interface DashboardComponent {
    title: string;
    selected: EventEmitter<any>;
}
