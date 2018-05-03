import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TagOverviewPageComponent } from "./tag-overview-page/tag-overview-page.component"

import { TagsRoutingModule } from "./tags.routing.module"

@NgModule({
  imports: [CommonModule, TagsRoutingModule],
  declarations: [TagOverviewPageComponent],
})
export class TagsModule {}
