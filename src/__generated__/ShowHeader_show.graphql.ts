/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _ShowHeader_show$ref: unique symbol;
export type ShowHeader_show$ref = typeof _ShowHeader_show$ref;
export type ShowHeader_show = {
    readonly gravityID: string;
    readonly internalID: string;
    readonly id: string;
    readonly name: string | null;
    readonly press_release: string | null;
    readonly is_followed: boolean | null;
    readonly end_at: string | null;
    readonly exhibition_period: string | null;
    readonly status: string | null;
    readonly isStubShow: boolean | null;
    readonly partner: ({
        readonly name?: string | null;
        readonly gravityID?: string;
        readonly href?: string | null;
    }) | null;
    readonly images: ReadonlyArray<({
        readonly url: string | null;
        readonly aspect_ratio: number;
    }) | null> | null;
    readonly followedArtists: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artist: ({
                    readonly name: string | null;
                    readonly href: string | null;
                    readonly gravityID: string;
                    readonly internalID: string;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly artists: ReadonlyArray<({
        readonly name: string | null;
        readonly href: string | null;
        readonly gravityID: string;
        readonly internalID: string;
    }) | null> | null;
    readonly " $refType": ShowHeader_show$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "gravityID",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v4 = [
  (v1/*: any*/),
  (v3/*: any*/),
  (v0/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Fragment",
  "name": "ShowHeader_show",
  "type": "Show",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "exhibition_period",
      "args": null,
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "press_release",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_followed",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "end_at",
      "args": null,
      "storageKey": null
    },
    (v2/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isStubShow",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "partner",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "type": "Partner",
          "selections": [
            (v1/*: any*/),
            (v0/*: any*/),
            (v3/*: any*/)
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "images",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "aspect_ratio",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "followedArtists",
      "storageKey": "followedArtists(first:3)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 3,
          "type": "Int"
        }
      ],
      "concreteType": "ShowFollowArtistConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ShowFollowArtistEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "ShowFollowArtist",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "artist",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Artist",
                  "plural": false,
                  "selections": (v4/*: any*/)
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "artists",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
      "plural": true,
      "selections": (v4/*: any*/)
    }
  ]
};
})();
(node as any).hash = 'f6f4d5d3eb75d0d185564a6ad0900eaa';
export default node;
