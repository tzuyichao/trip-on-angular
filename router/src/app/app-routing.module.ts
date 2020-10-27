import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
    { path: '', component: AComponent },
    { path: 'A', component: AComponent },
    { path: 'B', component: BComponent },
    { path: 'C', component: CComponent },
    { path: 'student', component: StudentComponent },
    { path: 'teacher', component: TeacherComponent },
    { path: 'parent', component: ParentComponent }
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