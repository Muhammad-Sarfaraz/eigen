/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/* @relayHash 054ece48e2fb76fb76dcc0d15662d29d */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AuctionResultsForArtistsYouFollowTestsQueryVariables = {
    first: number;
    after?: string | null | undefined;
};
export type AuctionResultsForArtistsYouFollowTestsQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"AuctionResultsForArtistsYouFollow_me">;
    } | null;
};
export type AuctionResultsForArtistsYouFollowTestsQuery = {
    readonly response: AuctionResultsForArtistsYouFollowTestsQueryResponse;
    readonly variables: AuctionResultsForArtistsYouFollowTestsQueryVariables;
};



/*
query AuctionResultsForArtistsYouFollowTestsQuery(
  $first: Int!
  $after: String
) {
  me {
    ...AuctionResultsForArtistsYouFollow_me_2HEEH6
    id
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

fragment AuctionResultsForArtistsYouFollow_me_2HEEH6 on Me {
  auctionResultsByFollowedArtists(first: $first, after: $after) {
    totalCount
    edges {
      node {
        saleDate
        internalID
        artistID
        ...AuctionResultListItem_auctionResult
        id
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
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuctionResultsForArtistsYouFollowTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": (v2/*: any*/),
            "kind": "FragmentSpread",
            "name": "AuctionResultsForArtistsYouFollow_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AuctionResultsForArtistsYouFollowTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "AuctionResultConnection",
            "kind": "LinkedField",
            "name": "auctionResultsByFollowedArtists",
            "plural": false,
            "selections": [
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
                        "name": "internalID",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "artistID",
                        "storageKey": null
                      },
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
                      (v3/*: any*/),
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
                          (v3/*: any*/)
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
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "AuctionResultsForArtistsYouFollowContainer_auctionResultsByFollowedArtists",
            "kind": "LinkedHandle",
            "name": "auctionResultsByFollowedArtists"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "054ece48e2fb76fb76dcc0d15662d29d",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.auctionResultsByFollowedArtists": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionResultConnection"
        },
        "me.auctionResultsByFollowedArtists.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AuctionResultEdge"
        },
        "me.auctionResultsByFollowedArtists.edges.cursor": (v4/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionResult"
        },
        "me.auctionResultsByFollowedArtists.edges.node.__typename": (v4/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "me.auctionResultsByFollowedArtists.edges.node.artist.id": (v5/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.artist.name": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.artistID": (v4/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.boughtIn": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "me.auctionResultsByFollowedArtists.edges.node.currency": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.dateText": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.estimate": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionLotEstimate"
        },
        "me.auctionResultsByFollowedArtists.edges.node.estimate.low": (v7/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.id": (v5/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.images": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionLotImages"
        },
        "me.auctionResultsByFollowedArtists.edges.node.images.thumbnail": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "me.auctionResultsByFollowedArtists.edges.node.images.thumbnail.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "me.auctionResultsByFollowedArtists.edges.node.images.thumbnail.height": (v8/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.images.thumbnail.url": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.images.thumbnail.width": (v8/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.internalID": (v5/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.mediumText": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.organization": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.performance": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionLotPerformance"
        },
        "me.auctionResultsByFollowedArtists.edges.node.performance.mid": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.priceRealized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "AuctionResultPriceRealized"
        },
        "me.auctionResultsByFollowedArtists.edges.node.priceRealized.cents": (v7/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.priceRealized.display": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.priceRealized.displayUSD": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.saleDate": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.edges.node.title": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.auctionResultsByFollowedArtists.pageInfo.endCursor": (v6/*: any*/),
        "me.auctionResultsByFollowedArtists.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "me.auctionResultsByFollowedArtists.totalCount": (v8/*: any*/),
        "me.id": (v5/*: any*/)
      }
    },
    "name": "AuctionResultsForArtistsYouFollowTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
(node as any).hash = 'a5c9cfdf62efb5558f14f098e5b8b6c2';
export default node;
