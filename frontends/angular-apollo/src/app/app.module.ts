import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { HttpClientModule } from "@angular/common/http"
import { ApolloModule, Apollo } from "apollo-angular"
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

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
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    RoutingModule,
    ArticlesModule,
    AuthorsModule,
    TagsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: "/api/graphql" }),
      cache: new InMemoryCache(),
    })
  }
}
