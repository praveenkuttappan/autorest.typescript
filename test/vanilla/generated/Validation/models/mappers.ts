/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


export const ChildProduct = {
  serializedName: "ChildProduct",
  type: {
    name: "Composite",
    className: "ChildProduct",
    modelProperties: {
      constProperty: {
        required: true,
        isConstant: true,
        serializedName: "constProperty",
        defaultValue: 'constant',
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ConstantProduct = {
  serializedName: "ConstantProduct",
  type: {
    name: "Composite",
    className: "ConstantProduct",
    modelProperties: {
      constProperty: {
        required: true,
        isConstant: true,
        serializedName: "constProperty",
        defaultValue: 'constant',
        type: {
          name: "String"
        }
      },
      constProperty2: {
        required: true,
        isConstant: true,
        serializedName: "constProperty2",
        defaultValue: 'constant2',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Product = {
  serializedName: "Product",
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      displayNames: {
        serializedName: "display_names",
        constraints: {
          MaxItems: 6,
          MinItems: 0,
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      },
      capacity: {
        serializedName: "capacity",
        constraints: {
          ExclusiveMaximum: 100,
          ExclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      image: {
        serializedName: "image",
        constraints: {
          Pattern: /http:\/\/\w+/
        },
        type: {
          name: "String"
        }
      },
      child: {
        required: true,
        serializedName: "child",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "ChildProduct"
        }
      },
      constChild: {
        required: true,
        isConstant: true,
        serializedName: "constChild",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "ConstantProduct"
        }
      },
      constInt: {
        required: true,
        isConstant: true,
        serializedName: "constInt",
        defaultValue: 0,
        type: {
          name: "Number"
        }
      },
      constString: {
        required: true,
        isConstant: true,
        serializedName: "constString",
        defaultValue: 'constant',
        type: {
          name: "String"
        }
      },
      constStringAsEnum: {
        serializedName: "constStringAsEnum",
        type: {
          name: "Enum",
          allowedValues: [
            "constant_string_as_enum"
          ]
        }
      }
    }
  }
};

export const ErrorModel = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      fields: {
        serializedName: "fields",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AutoRestValidationTestValidationOfBodyOptionalParams = {
  serializedName: "ValidationOfBodyOptions",
  type: {
    name: "Composite",
    className: "AutoRestValidationTestValidationOfBodyOptionalParams",
    modelProperties: {
      body: {
        serializedName: "body",
        type: {
          name: "Composite",
          className: "Product"
        }
      }
    }
  }
};

export const AutoRestValidationTestPostWithConstantInBodyOptionalParams = {
  serializedName: "PostWithConstantInBodyOptions",
  type: {
    name: "Composite",
    className: "AutoRestValidationTestPostWithConstantInBodyOptionalParams",
    modelProperties: {
      body: {
        serializedName: "body",
        type: {
          name: "Composite",
          className: "Product"
        }
      }
    }
  }
};
