import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appIf]'
})

export class AppIfDirective {
    constructor (private templateRef: TemplateRef<any>, 
        private viewContainer: ViewContainerRef) {}
    
    @Input() set appIf(condition: boolean) {
        if(condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else if(!condition) {
            this.viewContainer.clear();
        }
    }
}