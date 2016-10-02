import {Component, ViewContainerRef, ComponentFactoryResolver, Input, Output, EventEmitter, ReflectiveInjector, OnChanges, Compiler, NgModule, NgModuleFactory} from '@angular/core';
import {DashboardComponent} from "./dashboard-component";

@Component({
    selector: 'dynamic-dashboard-component',
    template: '<div></div>'
})
export class DynamicDashboardComponent implements DashboardComponent, OnChanges {

    constructor(private viewContainer: ViewContainerRef,
                private componentFactoryResolver: ComponentFactoryResolver,
                private compiler: Compiler) {
    }

    @Input() title: string;
    @Input() html: string;
    @Output() selected = new EventEmitter();

    private dynamicInstance: DashboardComponent;

    ngOnChanges(changes) {

        if (changes.html) {
            this.viewContainer.clear();


            let dynamicComponent = Component({
                template: this.html
            })(class {
                title: string;
                selected = new EventEmitter();
                select() {
                    console.debug('select');
                    this.selected.emit(this);
                }
            });

            let dynamicModule = NgModule({
                declarations: [dynamicComponent],
                exports: [dynamicComponent],
                entryComponents: [dynamicComponent]
            })(class { });

            let module = this.compiler.compileModuleAndAllComponentsSync(dynamicModule);

            let injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainer.parentInjector);
            let factory = module.ngModuleFactory.create(injector).componentFactoryResolver.resolveComponentFactory(dynamicComponent);

            let componentRef = this.viewContainer.createComponent(factory);
            this.dynamicInstance = componentRef.instance as DashboardComponent;

            // Set up Event-Handlers and delegate to own handlers
            this.dynamicInstance.selected.subscribe(e => this.selected.emit(e));
        }

        // Delegate Properties
        if (changes.title) {
            this.dynamicInstance.title = this.title;
        }

    }

}
