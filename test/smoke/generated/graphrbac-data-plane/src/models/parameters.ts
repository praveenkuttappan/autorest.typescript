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

export const apiVersion: coreHttp.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "1.6",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const tenantID: coreHttp.OperationURLParameter = {
  parameterPath: "tenantID",
  mapper: {
    serializedName: "tenantID",
    required: true,
    type: {
      name: "String"
    }
  }
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
  mapper: Mappers.ApplicationCreateParameters
};

export const filter: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const applicationObjectId: coreHttp.OperationURLParameter = {
  parameterPath: "applicationObjectId",
  mapper: {
    serializedName: "applicationObjectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.ApplicationUpdateParameters
};

export const applicationObjectId1: coreHttp.OperationURLParameter = {
  parameterPath: "applicationObjectId",
  mapper: {
    serializedName: "applicationObjectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.AddOwnerParameters
};

export const applicationObjectId2: coreHttp.OperationURLParameter = {
  parameterPath: "applicationObjectId",
  mapper: {
    serializedName: "applicationObjectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const applicationObjectId3: coreHttp.OperationURLParameter = {
  parameterPath: "applicationObjectId",
  mapper: {
    serializedName: "applicationObjectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ownerObjectId: coreHttp.OperationURLParameter = {
  parameterPath: "ownerObjectId",
  mapper: {
    serializedName: "ownerObjectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.KeyCredentialsUpdateParameters
};

export const parameters4: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.PasswordCredentialsUpdateParameters
};

export const applicationID: coreHttp.OperationURLParameter = {
  parameterPath: "applicationID",
  mapper: {
    serializedName: "applicationID",
    required: true,
    type: {
      name: "String"
    }
  }
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

export const objectId: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const parameters5: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.CheckGroupMembershipParameters
};

export const groupObjectId: coreHttp.OperationURLParameter = {
  parameterPath: "groupObjectId",
  mapper: {
    serializedName: "groupObjectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const memberObjectId: coreHttp.OperationURLParameter = {
  parameterPath: "memberObjectId",
  mapper: {
    serializedName: "memberObjectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters6: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.GroupAddMemberParameters
};

export const groupObjectId1: coreHttp.OperationURLParameter = {
  parameterPath: "groupObjectId",
  mapper: {
    serializedName: "groupObjectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters7: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.GroupCreateParameters
};

export const objectId1: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const objectId2: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const objectId3: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters8: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.GroupGetMemberGroupsParameters
};

export const objectId4: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const objectId5: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const objectId6: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const objectId7: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters9: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.ServicePrincipalCreateParameters
};

export const parameters10: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.ServicePrincipalBase
};

export const objectId8: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const objectId9: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const objectId10: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const objectId11: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters11: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.KeyCredentialsUpdateParameters
};

export const objectId12: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const objectId13: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters12: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.PasswordCredentialsUpdateParameters
};

export const parameters13: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.UserCreateParameters
};

export const expand: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const upnOrObjectId: coreHttp.OperationURLParameter = {
  parameterPath: "upnOrObjectId",
  mapper: {
    serializedName: "upnOrObjectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters14: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.UserUpdateParameters
};

export const upnOrObjectId1: coreHttp.OperationURLParameter = {
  parameterPath: "upnOrObjectId",
  mapper: {
    serializedName: "upnOrObjectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const upnOrObjectId2: coreHttp.OperationURLParameter = {
  parameterPath: "upnOrObjectId",
  mapper: {
    serializedName: "upnOrObjectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters15: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.UserGetMemberGroupsParameters
};

export const objectId14: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters16: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.GetObjectsParameters
};

export const domainName: coreHttp.OperationURLParameter = {
  parameterPath: "domainName",
  mapper: {
    serializedName: "domainName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const body: coreHttp.OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: Mappers.OAuth2PermissionGrant
};

export const objectId15: coreHttp.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    serializedName: "objectId",
    required: true,
    type: {
      name: "String"
    }
  }
};