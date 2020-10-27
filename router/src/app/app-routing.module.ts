import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

const routes: Routes = [
    { path: '', component: AComponent },
    { path: 'A', component: AComponent },
    { path: 'B', component: BComponent },
    { path: 'C', component: CComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
    constructor(private router: Router) {
        console.log(this.router.events);
        router.errorHandler = (error) => {
            console.log(`Router Error Caught: ${error}`);
        }
    }
}