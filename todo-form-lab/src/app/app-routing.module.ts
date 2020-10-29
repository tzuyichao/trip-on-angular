import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './component/create-todo/create-todo.component';

const routes: Routes = [
    { path: 'create-todo', component: CreateTodoComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ 
        RouterModule
    ]
})
export class AppRoutingModule {}
