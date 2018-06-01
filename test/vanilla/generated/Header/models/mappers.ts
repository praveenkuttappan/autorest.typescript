/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


export const ErrorModel = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HeaderParamStringOptionalParams = {
  serializedName: "ParamStringOptions",
  type: {
    name: "Composite",
    className: "HeaderParamStringOptionalParams",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HeaderParamDatetimeRfc1123OptionalParams = {
  serializedName: "ParamDatetimeRfc1123Options",
  type: {
    name: "Composite",
    className: "HeaderParamDatetimeRfc1123OptionalParams",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const HeaderParamEnumOptionalParams = {
  serializedName: "ParamEnumOptions",
  type: {
    name: "Composite",
    className: "HeaderParamEnumOptionalParams",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Enum",
          allowedValues: [
            "White",
            "black",
            "GREY"
          ]
        }
      }
    }
  }
};

export const HeaderResponseExistingKeyHeaders = {
  serializedName: "header-responseexistingkey-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseExistingKeyHeaders",
    modelProperties: {
      userAgent: {
        serializedName: "user-agent",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HeaderResponseProtectedKeyHeaders = {
  serializedName: "header-responseprotectedkey-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseProtectedKeyHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HeaderResponseIntegerHeaders = {
  serializedName: "header-responseinteger-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseIntegerHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HeaderResponseLongHeaders = {
  serializedName: "header-responselong-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseLongHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HeaderResponseFloatHeaders = {
  serializedName: "header-responsefloat-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseFloatHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HeaderResponseDoubleHeaders = {
  serializedName: "header-responsedouble-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseDoubleHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HeaderResponseBoolHeaders = {
  serializedName: "header-responsebool-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseBoolHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const HeaderResponseStringHeaders = {
  serializedName: "header-responsestring-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseStringHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HeaderResponseDateHeaders = {
  serializedName: "header-responsedate-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseDateHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const HeaderResponseDatetimeHeaders = {
  serializedName: "header-responsedatetime-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseDatetimeHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const HeaderResponseDatetimeRfc1123Headers = {
  serializedName: "header-responsedatetimerfc1123-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseDatetimeRfc1123Headers",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const HeaderResponseDurationHeaders = {
  serializedName: "header-responseduration-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseDurationHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "TimeSpan"
        }
      }
    }
  }
};

export const HeaderResponseByteHeaders = {
  serializedName: "header-responsebyte-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseByteHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const HeaderResponseEnumHeaders = {
  serializedName: "header-responseenum-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseEnumHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Enum",
          allowedValues: [
            "White",
            "black",
            "GREY"
          ]
        }
      }
    }
  }
};
