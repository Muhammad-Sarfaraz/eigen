/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/* @relayHash f455d6d671c4a0159a633b8db2ef2eca */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtistInsightsAuctionResultsTestsQueryVariables = {};
export type ArtistInsightsAuctionResultsTestsQueryResponse = {
    readonly artist: {
        readonly " $fragmentRefs": FragmentRefs<"ArtistInsightsAuctionResults_artist">;
    } | null;
};
export type ArtistInsightsAuctionResultsTestsQuery = {
    readonly response: ArtistInsightsAuctionResultsTestsQueryResponse;
    readonly variables: ArtistInsightsAuctionResultsTestsQueryVariables;
};



/*
query ArtistInsightsAuctionResultsTestsQuery {
  artist(id: "some-id") {
    ...ArtistInsightsAuctionResults_artist
    id
  }
}

fragment ArtistInsightsAuctionResults_artist on Artist {
  birthday
  slug
  id
  internalID
  auctionResultsConnection(allowEmptyCreatedDates: true, earliestCreatedYear: 1000, first: 10, latestCreatedYear: 2050, sort: DATE_DESC) {
    createdYearRange {
      startAt
      endAt
    }
    totalCount
    edges {
      node {
        id
        internalID
        ...AuctionResultListItem_auctionResult
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment AuctionResultListItem_auctionResult on AuctionResult {
  currency
  dateText
  id
  internalID
  artist {
    name
    id
  }
  images {
    thumbnail {
      url(version: "square140")
      height
      width
      aspectRatio
    }
  }
  estimate {
    low
  }
  mediumText
  organization
  boughtIn
  performance {
    mid
  }
  priceRealized {
    cents
    display
    displayUSD
  }
  saleDate
  title
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "allowEmptyCreatedDates",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "earliestCreatedYear",
    "value": 1000
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "latestCreatedYear",
    "value": 2050
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "DATE_DESC"
  }
],
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artist"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v6 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v7 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistInsightsAuctionResultsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistInsightsAuctionResults_artist"
          }
        ],
        "storageKey": "artist(id:\"some-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtistInsightsAuctionResultsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "birthday",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "AuctionResultConnection",
            "kind": "LinkedField",
            "name": "auctionResultsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "YearRange",
                "kind": "LinkedField",
                "name": "createdYearRange",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endAt",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AuctionResultEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AuctionResult",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "currency",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "dateText",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "artist",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v1/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionLotImages",
                        "kind": "LinkedField",
                        "name": "images",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "thumbnail",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "version",
                                    "value": "square140"
                                  }
                                ],
                                "kind": "ScalarField",
                                "name": "url",
                                "storageKey": "url(version:\"square140\")"
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "height",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "width",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "aspectRatio",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionLotEstimate",
                        "kind": "LinkedField",
                        "name": "estimate",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "low",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "mediumText",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "organization",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "boughtIn",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionLotPerformance",
                        "kind": "LinkedField",
                        "name": "performance",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "mid",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionResultPriceRealized",
                        "kind": "LinkedField",
                        "name": "priceRealized",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "cents",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "display",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "displayUSD",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "saleDate",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "auctionResultsConnection(allowEmptyCreatedDates:true,earliestCreatedYear:1000,first:10,latestCreatedYear:2050,sort:\"DATE_DESC\")"
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "filters": [
              "allowEmptyCreatedDates",
              "categories",
              "earliestCreatedYear",
              "keyword",
              "latestCreatedYear",
              "organizations",
              "sizes",
              "sort"
            ],
            "handle": "connection",
            "key": "artist_auctionResultsConnection",
            "kind": "LinkedHandle",
            "name": "auctionResultsConnection"
          }
        ],
        "storageKey": "artist(id:\"some-id\")"
      }
    ]
  },
  "params": {
    "id": "f455d6d671c4a0159a633b8db2ef2eca",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artist": (v4/*: any*/),
        "artist.auctionResultsConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionResultConnection"
        },
        "artist.auctionResultsConnection.createdYearRange": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "YearRange"
        },
        "artist.auctionResultsConnection.createdYearRange.endAt": (v5/*: any*/),
        "artist.auctionResultsConnection.createdYearRange.startAt": (v5/*: any*/),
        "artist.auctionResultsConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AuctionResultEdge"
        },
        "artist.auctionResultsConnection.edges.cursor": (v6/*: any*/),
        "artist.auctionResultsConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionResult"
        },
        "artist.auctionResultsConnection.edges.node.__typename": (v6/*: any*/),
        "artist.auctionResultsConnection.edges.node.artist": (v4/*: any*/),
        "artist.auctionResultsConnection.edges.node.artist.id": (v7/*: any*/),
        "artist.auctionResultsConnection.edges.node.artist.name": (v8/*: any*/),
        "artist.auctionResultsConnection.edges.node.boughtIn": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "artist.auctionResultsConnection.edges.node.currency": (v8/*: any*/),
        "artist.auctionResultsConnection.edges.node.dateText": (v8/*: any*/),
        "artist.auctionResultsConnection.edges.node.estimate": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionLotEstimate"
        },
        "artist.auctionResultsConnection.edges.node.estimate.low": (v9/*: any*/),
        "artist.auctionResultsConnection.edges.node.id": (v7/*: any*/),
        "artist.auctionResultsConnection.edges.node.images": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionLotImages"
        },
        "artist.auctionResultsConnection.edges.node.images.thumbnail": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "artist.auctionResultsConnection.edges.node.images.thumbnail.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "artist.auctionResultsConnection.edges.node.images.thumbnail.height": (v5/*: any*/),
        "artist.auctionResultsConnection.edges.node.images.thumbnail.url": (v8/*: any*/),
        "artist.auctionResultsConnection.edges.node.images.thumbnail.width": (v5/*: any*/),
        "artist.auctionResultsConnection.edges.node.internalID": (v7/*: any*/),
        "artist.auctionResultsConnection.edges.node.mediumText": (v8/*: any*/),
        "artist.auctionResultsConnection.edges.node.organization": (v8/*: any*/),
        "artist.auctionResultsConnection.edges.node.performance": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionLotPerformance"
        },
        "artist.auctionResultsConnection.edges.node.performance.mid": (v8/*: any*/),
        "artist.auctionResultsConnection.edges.node.priceRealized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionResultPriceRealized"
        },
        "artist.auctionResultsConnection.edges.node.priceRealized.cents": (v9/*: any*/),
        "artist.auctionResultsConnection.edges.node.priceRealized.display": (v8/*: any*/),
        "artist.auctionResultsConnection.edges.node.priceRealized.displayUSD": (v8/*: any*/),
        "artist.auctionResultsConnection.edges.node.saleDate": (v8/*: any*/),
        "artist.auctionResultsConnection.edges.node.title": (v8/*: any*/),
        "artist.auctionResultsConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "artist.auctionResultsConnection.pageInfo.endCursor": (v8/*: any*/),
        "artist.auctionResultsConnection.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "artist.auctionResultsConnection.totalCount": (v5/*: any*/),
        "artist.birthday": (v8/*: any*/),
        "artist.id": (v7/*: any*/),
        "artist.internalID": (v7/*: any*/),
        "artist.slug": (v7/*: any*/)
      }
    },
    "name": "ArtistInsightsAuctionResultsTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
(node as any).hash = '2f2117c7c89001580a50389ac3613781';
export default node;
