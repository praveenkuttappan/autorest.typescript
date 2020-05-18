/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";

export const $host: coreHttp.OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName: coreHttp.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-w._()]+$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const applicationName: coreHttp.OperationURLParameter = {
  parameterPath: "applicationName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    serializedName: "applicationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: coreHttp.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-06-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: coreHttp.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: coreHttp.OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.Application
};

export const parameters1: coreHttp.OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: Mappers.Application
};

export const applicationId: coreHttp.OperationURLParameter = {
  parameterPath: "applicationId",
  mapper: {
    serializedName: "applicationId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const nextLink: coreHttp.OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const nextLink1: coreHttp.OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const applicationDefinitionName: coreHttp.OperationURLParameter = {
  parameterPath: "applicationDefinitionName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    serializedName: "applicationDefinitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const applicationDefinitionName1: coreHttp.OperationURLParameter = {
  parameterPath: "applicationDefinitionName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    serializedName: "applicationDefinitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.ApplicationDefinition
};

export const applicationDefinitionId: coreHttp.OperationURLParameter = {
  parameterPath: "applicationDefinitionId",
  mapper: {
    serializedName: "applicationDefinitionId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const parameters3: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.ApplicationDefinition
};
