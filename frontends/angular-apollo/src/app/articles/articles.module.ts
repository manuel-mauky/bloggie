import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ArticleDetailsPageComponent } from "./article-details-page/article-details-page.component"
import { ArticlesOverviewPageComponent } from "./articles-overview-page/articles-overview-page.component"

import { ArticlesRoutingModule } from "./Articles.routing.module"

@NgModule({
  imports: [CommonModule, ArticlesRoutingModule],
  declarations: [ArticleDetailsPageComponent, ArticlesOverviewPageComponent],
})
export class ArticlesModule {}
