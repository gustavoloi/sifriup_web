import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivateGuard } from "../guard/private.guard";
import { PrivateComponent } from "./private.component";

const routes: Routes = [
  {
    path: "",
    component: PrivateComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./app/app.module").then((m) => m.AppPageModule),
      },
      {
        path: "**",
        redirectTo: "",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
