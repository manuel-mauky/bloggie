import { RouterModule, Routes } from "@angular/router"
import { NgModule } from "@angular/core"

import { AboutComponent } from "./about/about.component"

export const appRoutes: Routes = [
  {
    path: "articles",
    loadChildren: "app/articles/articles.module#ArticlesModule",
  },
  {
    path: "authors",
    loadChildren: "app/authors/authors.module#AuthorsModule",
  },
  {
    path: "tags",
    loadChildren: "app/tags/tags.module#TagsModule",
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "",
    redirectTo: "articles",
    pathMatch: "full",
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule {}
