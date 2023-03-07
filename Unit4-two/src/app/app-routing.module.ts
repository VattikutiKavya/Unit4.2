import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetDetailsComponent } from './get-details/get-details.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', redirectTo: 'getDetails', pathMatch: 'full' },
  { path: 'getDetails', component: GetDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'update', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
