import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

import { ArticlesOverviewPageComponent } from "./articles-overview-page/articles-overview-page.component"
import { ArticleDetailsPageComponent } from "./article-details-page/article-details-page.component"

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "articles/:permalink", component: ArticleDetailsPageComponent}
      { path: "articles", component: ArticlesOverviewPageComponent },
      { path: "", component: ArticlesOverviewPageComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
