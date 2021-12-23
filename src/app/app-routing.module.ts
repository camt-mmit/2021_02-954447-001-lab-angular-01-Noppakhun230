import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendComponent } from './friend/friend.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
  path: 'hello-world',
  component: HelloWorldComponent,
},
{
  path: 'profile',
  component: ProfileComponent,
},
{
  path: 'friend',
  component: FriendComponent,
},
{
  path: 'status',
  component: StatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
