import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SearchResultComponent } from './searchresult/searchresult.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'aboutus', component: AboutusComponent},
{path: 'searchpage', component: SearchpageComponent},
{path: 'search', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
