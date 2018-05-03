import { Component, OnInit } from '@angular/core';

import { Apollo} from 'apollo-angular'
import gql from 'graphql-tag'

const authorListQuery = gql`
  query authorList {
    authors {
      id
      name
      articles {
        id
        title
        permalink
        releaseDate
      }
    }
  }
`




@Component({
  selector: 'app-authors-overview-page',
  templateUrl: './authors-overview-page.component.html',
  styleUrls: ['./authors-overview-page.component.css']
})
export class AuthorsOverviewPageComponent implements OnInit, OnDestroy {

  loading: boolean,

  authors: Array<any>

  private querySubscription;


  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: authorListQuery
    })
    .valueChanges
    .subscribe(({data, loading}) => {
      this.loading = loading,
      this.authors = data.authors
    })

  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe()
  }

}
