import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RiderlistComponent } from './components/riderlist/riderlist.component';
import { ScorelistComponent } from './components/scorelist/scorelist.component';
import { EventlistComponent } from './components/eventlist/eventlist.component';

const routes: Routes = [
    {
        path: 'riders/:compfei',
        component: RiderlistComponent
    },
    {
        path: 'riders',
        component: RiderlistComponent
    },
    {
        path: 'scores/:compfei',
        component: ScorelistComponent
    },
    {
        path: 'scores',
        component: ScorelistComponent
    },
    {
        path: 'events',
        component: EventlistComponent
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            FormsModule,
            HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
