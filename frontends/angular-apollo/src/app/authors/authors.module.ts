import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { AuthorsOverviewPageComponent } from "./authors-overview-page/authors-overview-page.component"
import { AuthorDetailsPageComponent } from "./author-details-page/author-details-page.component"

import { AuthorsRoutingModule } from "./authors.routing.module"

@NgModule({
  imports: [CommonModule, AuthorsRoutingModule],
  declarations: [AuthorsOverviewPageComponent, AuthorDetailsPageComponent],
})
export class AuthorsModule {}
