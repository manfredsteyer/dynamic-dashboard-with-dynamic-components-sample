import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {Dashboard} from "./dashboard/dashboard";
import {DashboardComponentA} from "./dashboard/dashboard-component-a";
import {DashboardComponentB} from "./dashboard/dashboard-component-b";
import {DashboardComponentOutlet} from "./dashboard/dashboard-component-outlet";
import {DynamicDashboardComponent} from "./dashboard/dynamic-dashboard-component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent, Dashboard, DashboardComponentOutlet, DynamicDashboardComponent,
        DashboardComponentA, DashboardComponentB
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        DashboardComponentA, DashboardComponentB
    ]
})
export class AppModule {
}