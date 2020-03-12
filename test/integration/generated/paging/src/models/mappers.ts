/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const ProductResultValue: coreHttp.CompositeMapper = {
  serializedName: "ProductResultValue",
  type: {
    name: "Composite",
    className: "ProductResultValue",
    modelProperties: {
      value: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Product" } }
        },
        serializedName: "value"
      },
      nextLink: { type: { name: "String" }, serializedName: "nextLink" }
    }
  }
};

export const Product: coreHttp.CompositeMapper = {
  serializedName: "Product",
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: { name: "Composite", className: "ProductProperties" }
      }
    }
  }
};

export const ProductProperties: coreHttp.CompositeMapper = {
  serializedName: "ProductProperties",
  type: {
    name: "Composite",
    className: "ProductProperties",
    modelProperties: {
      id: { type: { name: "Number" }, serializedName: "id" },
      name: { type: { name: "String" }, serializedName: "name" }
    }
  }
};

export const ProductResult: coreHttp.CompositeMapper = {
  serializedName: "ProductResult",
  type: {
    name: "Composite",
    className: "ProductResult",
    modelProperties: {
      values: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Product" } }
        },
        serializedName: "values"
      },
      nextLink: { type: { name: "String" }, serializedName: "nextLink" }
    }
  }
};

export const OdataProductResult: coreHttp.CompositeMapper = {
  serializedName: "OdataProductResult",
  type: {
    name: "Composite",
    className: "OdataProductResult",
    modelProperties: {
      values: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Product" } }
        },
        serializedName: "values"
      },
      odataNextLink: {
        type: { name: "String" },
        serializedName: "odata.nextLink"
      }
    }
  }
};

export const OperationResult: coreHttp.CompositeMapper = {
  serializedName: "OperationResult",
  type: {
    name: "Composite",
    className: "OperationResult",
    modelProperties: {
      status: { type: { name: "String" }, serializedName: "status" }
    }
  }
};