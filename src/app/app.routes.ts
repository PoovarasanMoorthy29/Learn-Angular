import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Notes } from './notes/notes';
import { Trash } from './trash/trash';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'notes', component:Notes},
    {path:'trash', component:Trash},
];
