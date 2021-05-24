/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const LexicalAnalyzer: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LexicalAnalyzer",
    uberParent: "LexicalAnalyzer",
    polymorphicDiscriminator: {
      serializedName: "@odata\\.type",
      clientName: "@odata\\.type"
    },
    modelProperties: {
      odataType: {
        serializedName: "@odata\\.type",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PathHierarchyTokenizerV2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PathHierarchyTokenizerV2",
    modelProperties: {
      delimiter: {
        defaultValue: "/",
        serializedName: "delimiter",
        type: {
          name: "String"
        }
      },
      replacement: {
        defaultValue: "/",
        serializedName: "replacement",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PatternAnalyzer: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Azure.Search.PatternAnalyzer",
  type: {
    name: "Composite",
    className: "PatternAnalyzer",
    uberParent: "LexicalAnalyzer",
    polymorphicDiscriminator: LexicalAnalyzer.type.polymorphicDiscriminator,
    modelProperties: {
      ...LexicalAnalyzer.type.modelProperties,
      lowerCaseTerms: {
        defaultValue: true,
        serializedName: "lowercase",
        type: {
          name: "Boolean"
        }
      },
      pattern: {
        defaultValue: "W+",
        serializedName: "pattern",
        type: {
          name: "String"
        }
      },
      stopwords: {
        serializedName: "stopwords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const LuceneStandardAnalyzer: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Azure.Search.StandardAnalyzer",
  type: {
    name: "Composite",
    className: "LuceneStandardAnalyzer",
    uberParent: "LexicalAnalyzer",
    polymorphicDiscriminator: LexicalAnalyzer.type.polymorphicDiscriminator,
    modelProperties: {
      ...LexicalAnalyzer.type.modelProperties,
      maxTokenLength: {
        defaultValue: 255,
        constraints: {
          InclusiveMaximum: 300
        },
        serializedName: "maxTokenLength",
        type: {
          name: "Number"
        }
      },
      stopwords: {
        serializedName: "stopwords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const StopAnalyzer: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Azure.Search.StopAnalyzer",
  type: {
    name: "Composite",
    className: "StopAnalyzer",
    uberParent: "LexicalAnalyzer",
    polymorphicDiscriminator: LexicalAnalyzer.type.polymorphicDiscriminator,
    modelProperties: {
      ...LexicalAnalyzer.type.modelProperties,
      stopwords: {
        serializedName: "stopwords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export let discriminators = {
  LexicalAnalyzer: LexicalAnalyzer,
  "LexicalAnalyzer.#Microsoft.Azure.Search.PatternAnalyzer": PatternAnalyzer,
  "LexicalAnalyzer.#Microsoft.Azure.Search.StandardAnalyzer": LuceneStandardAnalyzer,
  "LexicalAnalyzer.#Microsoft.Azure.Search.StopAnalyzer": StopAnalyzer
};