import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RiderlistComponent } from './components/riderlist/riderlist.component';
import { ScorelistComponent } from './components/scorelist/scorelist.component';

const routes: Routes = [
    {
        path: 'riders',
        component: RiderlistComponent
    },
    {
        path: 'scores',
        component: ScorelistComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            FormsModule,
            HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
