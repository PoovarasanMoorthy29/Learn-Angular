import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Notes } from './notes/notes';
import { Trash } from './trash/trash';
import { InvalidPage } from './invalid-page/invalid-page';
import { Testing } from '../learning/testing/testing';

export const routes: Routes = [
    // {path:'', component:Home},
    // {path:'notes', component:Notes},
    // {path:'trash', component:Trash},


    {path:"",component:Home},
    {path:"notes",component:Notes},
    {path:"trash",component:Trash},
    {path:"test",redirectTo:"notes"},
    {path:'testing',component:Testing},
    {path:"**",component:InvalidPage}
];
