import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { ArticlesModule } from "./articles/articles.module"
import { AuthorsModule } from "./authors/authors.module"
import { TagsModule } from "./tags/tags.module"

import { AppComponent } from "./app.component"
import { NavigationComponent } from "./navigation/navigation.component"
import { AboutComponent } from "./about/about.component"
import { NoMatchPageComponent } from "./no-match-page/no-match-page.component"

import { RoutingModule } from "./routing.module"

@NgModule({
  declarations: [AppComponent, NavigationComponent, AboutComponent, NoMatchPageComponent],
  imports: [BrowserModule, RoutingModule, ArticlesModule, AuthorsModule, TagsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
