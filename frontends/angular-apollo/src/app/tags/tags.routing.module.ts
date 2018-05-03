import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

import { TagOverviewPageComponent } from "./tag-overview-page/tag-overview-page.component"

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "tags", component: TagOverviewPageComponent },
      { path: "", component: TagOverviewPageComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
