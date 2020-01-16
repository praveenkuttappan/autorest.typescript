/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";

export const $host: coreHttp.OperationParameter = {
  parameterPath: "$host",
  mapper: {
    type: { name: "String" },
    serializedName: "$host",
    required: true
  }
};

export const boolPath: coreHttp.OperationURLParameter = {
  parameterPath: "boolPath",
  mapper: {
    type: { name: "Boolean" },
    serializedName: "boolPath",
    isConstant: true,
    defaultValue: true
  }
};

export const boolPath1: coreHttp.OperationURLParameter = {
  parameterPath: "boolPath",
  mapper: {
    type: { name: "Boolean" },
    serializedName: "boolPath",
    isConstant: true,
    defaultValue: false
  }
};

export const intPath: coreHttp.OperationURLParameter = {
  parameterPath: "intPath",
  mapper: {
    type: { name: "Number" },
    serializedName: "intPath",
    isConstant: true,
    defaultValue: 1000000
  }
};

export const intPath1: coreHttp.OperationURLParameter = {
  parameterPath: "intPath",
  mapper: {
    type: { name: "Number" },
    serializedName: "intPath",
    isConstant: true,
    defaultValue: -1000000
  }
};

export const longPath: coreHttp.OperationURLParameter = {
  parameterPath: "longPath",
  mapper: {
    type: { name: "Number" },
    serializedName: "longPath",
    isConstant: true,
    defaultValue: 10000000000
  }
};

export const longPath1: coreHttp.OperationURLParameter = {
  parameterPath: "longPath",
  mapper: {
    type: { name: "Number" },
    serializedName: "longPath",
    isConstant: true,
    defaultValue: -10000000000
  }
};

export const floatPath: coreHttp.OperationURLParameter = {
  parameterPath: "floatPath",
  mapper: {
    type: { name: "Number" },
    serializedName: "floatPath",
    isConstant: true,
    defaultValue: 103400000000000000000
  }
};

export const floatPath1: coreHttp.OperationURLParameter = {
  parameterPath: "floatPath",
  mapper: {
    type: { name: "Number" },
    serializedName: "floatPath",
    isConstant: true,
    defaultValue: -1.034e-20
  }
};

export const doublePath: coreHttp.OperationURLParameter = {
  parameterPath: "doublePath",
  mapper: {
    type: { name: "Number" },
    serializedName: "doublePath",
    isConstant: true,
    defaultValue: 9999999.999
  }
};

export const doublePath1: coreHttp.OperationURLParameter = {
  parameterPath: "doublePath",
  mapper: {
    type: { name: "Number" },
    serializedName: "doublePath",
    isConstant: true,
    defaultValue: -9999999.999
  }
};

export const stringPath: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    type: { name: "String" },
    serializedName: "stringPath",
    isConstant: true,
    defaultValue: "啊齄丂狛狜隣郎隣兀﨩"
  }
};

export const stringPath1: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    type: { name: "String" },
    serializedName: "stringPath",
    isConstant: true,
    defaultValue: "begin!*'();:@ &=+$,/?#[]end"
  }
};

export const stringPath2: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    type: { name: "String" },
    serializedName: "stringPath",
    isConstant: true,
    defaultValue: "begin!*'();:@&=+$,end"
  }
};

export const stringPath3: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    type: { name: "String" },
    serializedName: "stringPath",
    isConstant: true,
    defaultValue: ""
  }
};

export const stringPath4: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    type: { name: "String" },
    serializedName: "stringPath",
    required: true
  }
};

export const enumPath: coreHttp.OperationURLParameter = {
  parameterPath: "enumPath",
  mapper: {
    type: {
      name: "Enum",
      allowedValues: ["red color", "green color", "blue color"]
    },
    serializedName: "enumPath",
    required: true
  }
};

export const bytePath: coreHttp.OperationURLParameter = {
  parameterPath: "bytePath",
  mapper: {
    type: { name: "ByteArray" },
    serializedName: "bytePath",
    required: true
  }
};

export const bytePath1: coreHttp.OperationURLParameter = {
  parameterPath: "bytePath",
  mapper: {
    type: { name: "ByteArray" },
    serializedName: "bytePath",
    isConstant: true,
    defaultValue: new Uint8Array(0)
  }
};

export const datePath: coreHttp.OperationURLParameter = {
  parameterPath: "datePath",
  mapper: {
    type: { name: "Date" },
    serializedName: "datePath",
    isConstant: true,
    defaultValue: "2012-01-01"
  }
};

export const datePath1: coreHttp.OperationURLParameter = {
  parameterPath: "datePath",
  mapper: {
    type: { name: "Date" },
    serializedName: "datePath",
    required: true
  }
};

export const dateTimePath: coreHttp.OperationURLParameter = {
  parameterPath: "dateTimePath",
  mapper: {
    type: { name: "DateTime" },
    serializedName: "dateTimePath",
    isConstant: true,
    defaultValue: "2012-01-01T01:01:01Z"
  }
};

export const dateTimePath1: coreHttp.OperationURLParameter = {
  parameterPath: "dateTimePath",
  mapper: {
    type: { name: "DateTime" },
    serializedName: "dateTimePath",
    required: true
  }
};

export const base64UrlPath: coreHttp.OperationURLParameter = {
  parameterPath: "base64UrlPath",
  mapper: {
    type: { name: "Base64Url" },
    serializedName: "base64UrlPath",
    required: true
  }
};

export const arrayPath: coreHttp.OperationURLParameter = {
  parameterPath: "arrayPath",
  mapper: {
    type: {
      name: "Sequence",
      element: { type: { name: "String" }, serializedName: "get-0-itemsItem" }
    },
    serializedName: "arrayPath",
    required: true
  }
};

export const unixTimeUrlPath: coreHttp.OperationURLParameter = {
  parameterPath: "unixTimeUrlPath",
  mapper: {
    type: { name: "UnixTime" },
    serializedName: "unixTimeUrlPath",
    required: true
  }
};

export const boolQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "boolQuery",
  mapper: {
    type: { name: "Boolean" },
    serializedName: "boolQuery",
    isConstant: true,
    defaultValue: true
  }
};

export const boolQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "boolQuery",
  mapper: {
    type: { name: "Boolean" },
    serializedName: "boolQuery",
    isConstant: true,
    defaultValue: false
  }
};

export const boolQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "boolQuery"],
  mapper: {
    type: { name: "Boolean" },
    serializedName: "boolQuery"
  }
};

export const intQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "intQuery",
  mapper: {
    type: { name: "Number" },
    serializedName: "intQuery",
    isConstant: true,
    defaultValue: 1000000
  }
};

export const intQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "intQuery",
  mapper: {
    type: { name: "Number" },
    serializedName: "intQuery",
    isConstant: true,
    defaultValue: -1000000
  }
};

export const intQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "intQuery"],
  mapper: {
    type: { name: "Number" },
    serializedName: "intQuery"
  }
};

export const longQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "longQuery",
  mapper: {
    type: { name: "Number" },
    serializedName: "longQuery",
    isConstant: true,
    defaultValue: 10000000000
  }
};

export const longQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "longQuery",
  mapper: {
    type: { name: "Number" },
    serializedName: "longQuery",
    isConstant: true,
    defaultValue: -10000000000
  }
};

export const longQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "longQuery"],
  mapper: {
    type: { name: "Number" },
    serializedName: "longQuery"
  }
};

export const floatQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "floatQuery",
  mapper: {
    type: { name: "Number" },
    serializedName: "floatQuery",
    isConstant: true,
    defaultValue: 103400000000000000000
  }
};

export const floatQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "floatQuery",
  mapper: {
    type: { name: "Number" },
    serializedName: "floatQuery",
    isConstant: true,
    defaultValue: -1.034e-20
  }
};

export const floatQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "floatQuery"],
  mapper: {
    type: { name: "Number" },
    serializedName: "floatQuery"
  }
};

export const doubleQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "doubleQuery",
  mapper: {
    type: { name: "Number" },
    serializedName: "doubleQuery",
    isConstant: true,
    defaultValue: 9999999.999
  }
};

export const doubleQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "doubleQuery",
  mapper: {
    type: { name: "Number" },
    serializedName: "doubleQuery",
    isConstant: true,
    defaultValue: -9999999.999
  }
};

export const doubleQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "doubleQuery"],
  mapper: {
    type: { name: "Number" },
    serializedName: "doubleQuery"
  }
};

export const stringQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "stringQuery",
  mapper: {
    type: { name: "String" },
    serializedName: "stringQuery",
    isConstant: true,
    defaultValue: "啊齄丂狛狜隣郎隣兀﨩"
  }
};

export const stringQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "stringQuery",
  mapper: {
    type: { name: "String" },
    serializedName: "stringQuery",
    isConstant: true,
    defaultValue: "begin!*'();:@ &=+$,/?#[]end"
  }
};

export const stringQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: "stringQuery",
  mapper: {
    type: { name: "String" },
    serializedName: "stringQuery",
    isConstant: true,
    defaultValue: ""
  }
};

export const stringQuery3: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "stringQuery"],
  mapper: {
    type: { name: "String" },
    serializedName: "stringQuery"
  }
};

export const enumQuery: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "enumQuery"],
  mapper: {
    type: {
      name: "Enum",
      allowedValues: ["red color", "green color", "blue color"]
    },
    serializedName: "enumQuery"
  }
};

export const byteQuery: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "byteQuery"],
  mapper: {
    type: { name: "ByteArray" },
    serializedName: "byteQuery"
  }
};

export const byteQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "byteQuery",
  mapper: {
    type: { name: "ByteArray" },
    serializedName: "byteQuery",
    isConstant: true,
    defaultValue: new Uint8Array(0)
  }
};

export const dateQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "dateQuery",
  mapper: {
    type: { name: "Date" },
    serializedName: "dateQuery",
    isConstant: true,
    defaultValue: "2012-01-01"
  }
};

export const dateQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "dateQuery"],
  mapper: {
    type: { name: "Date" },
    serializedName: "dateQuery"
  }
};

export const dateTimeQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "dateTimeQuery",
  mapper: {
    type: { name: "DateTime" },
    serializedName: "dateTimeQuery",
    isConstant: true,
    defaultValue: "2012-01-01T01:01:01Z"
  }
};

export const dateTimeQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "dateTimeQuery"],
  mapper: {
    type: { name: "DateTime" },
    serializedName: "dateTimeQuery"
  }
};

export const arrayQuery: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "arrayQuery"],
  mapper: {
    type: {
      name: "Sequence",
      element: { type: { name: "String" }, serializedName: "string" }
    },
    serializedName: "arrayQuery"
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Csv
};

export const arrayQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "arrayQuery"],
  mapper: {
    type: {
      name: "Sequence",
      element: { type: { name: "String" }, serializedName: "string" }
    },
    serializedName: "arrayQuery"
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Ssv
};

export const arrayQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "arrayQuery"],
  mapper: {
    type: {
      name: "Sequence",
      element: { type: { name: "String" }, serializedName: "string" }
    },
    serializedName: "arrayQuery"
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Tsv
};

export const arrayQuery3: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "arrayQuery"],
  mapper: {
    type: {
      name: "Sequence",
      element: { type: { name: "String" }, serializedName: "string" }
    },
    serializedName: "arrayQuery"
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Pipes
};

export const pathItemStringPath: coreHttp.OperationURLParameter = {
  parameterPath: "pathItemStringPath",
  mapper: {
    type: { name: "String" },
    serializedName: "pathItemStringPath",
    required: true
  }
};

export const pathItemStringQuery: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "pathItemStringQuery"],
  mapper: {
    type: { name: "String" },
    serializedName: "pathItemStringQuery"
  }
};

export const globalStringPath: coreHttp.OperationURLParameter = {
  parameterPath: "globalStringPath",
  mapper: {
    type: { name: "String" },
    serializedName: "globalStringPath",
    required: true
  }
};

export const globalStringQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "globalStringQuery",
  mapper: {
    type: { name: "String" },
    serializedName: "globalStringQuery"
  }
};

export const localStringPath: coreHttp.OperationURLParameter = {
  parameterPath: "localStringPath",
  mapper: {
    type: { name: "String" },
    serializedName: "localStringPath",
    required: true
  }
};

export const localStringQuery: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "localStringQuery"],
  mapper: {
    type: { name: "String" },
    serializedName: "localStringQuery"
  }
};