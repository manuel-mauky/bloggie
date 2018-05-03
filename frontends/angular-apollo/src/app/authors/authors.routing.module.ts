import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

import { AuthorsOverviewPageComponent } from "./authors-overview-page/authors-overview-page.component"
import { AuthorDetailsPageComponent } from "./author-details-page/author-details-page.component"

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "authors/:id", component: AuthorDetailsPageComponent}
      { path: "authors", component: AuthorsOverviewPageComponent },
      { path: "", component: AuthorsOverviewPageComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AuthorsRoutingModule {}
