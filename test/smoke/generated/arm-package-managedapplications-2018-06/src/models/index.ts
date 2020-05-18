/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/**
 * Resource information.
 */
export interface Resource {
  /**
   * Resource ID
   */
  readonly id?: string;
  /**
   * Resource name
   */
  readonly name?: string;
  /**
   * Resource type
   */
  readonly type?: string;
  /**
   * Resource location
   */
  location?: string;
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Resource information.
 */
export type GenericResource = Resource & {
  /**
   * ID of the resource that manages this resource.
   */
  managedBy?: string;
  /**
   * The SKU of the resource.
   */
  sku?: Sku;
  /**
   * The identity of the resource.
   */
  identity?: Identity;
};

/**
 * SKU for the resource.
 */
export interface Sku {
  /**
   * The SKU name.
   */
  name: string;
  /**
   * The SKU tier.
   */
  tier?: string;
  /**
   * The SKU size.
   */
  size?: string;
  /**
   * The SKU family.
   */
  family?: string;
  /**
   * The SKU model.
   */
  model?: string;
  /**
   * The SKU capacity.
   */
  capacity?: number;
}

/**
 * Identity for the resource.
 */
export interface Identity {
  /**
   * The principal ID of resource identity.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   */
  readonly tenantId?: string;
  /**
   * The identity type.
   */
  type?: "SystemAssigned";
}

/**
 * Information about managed application.
 */
export type Application = GenericResource & {
  /**
   * The plan information.
   */
  plan?: Plan;
  /**
   * The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
   */
  kind: string;
  /**
   * The managed resource group Id.
   */
  managedResourceGroupId: string;
  /**
   * The fully qualified path of managed application definition Id.
   */
  applicationDefinitionId?: string;
  /**
   * Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
   */
  parameters?: any;
  /**
   * Name and value pairs that define the managed application outputs.
   */
  readonly outputs?: any;
  /**
   * The managed application provisioning state.
   */
  readonly provisioningState?: ProvisioningState;
};

/**
 * Plan for the managed application.
 */
export interface Plan {
  /**
   * The plan name.
   */
  name: string;
  /**
   * The publisher ID.
   */
  publisher: string;
  /**
   * The product code.
   */
  product: string;
  /**
   * The promotion code.
   */
  promotionCode?: string;
  /**
   * The plan's version.
   */
  version: string;
}

/**
 * Error response indicates managed application is not able to process the incoming request. The reason is provided in the error message.
 */
export interface ErrorResponse {
  /**
   * Http status code.
   */
  httpStatus?: string;
  /**
   * Error code.
   */
  errorCode?: string;
  /**
   * Error message indicating why the operation failed.
   */
  errorMessage?: string;
}

/**
 * Information about managed application definition.
 */
export type ApplicationDefinition = GenericResource & {
  /**
   * The managed application lock level.
   */
  lockLevel: ApplicationLockLevel;
  /**
   * The managed application definition display name.
   */
  displayName?: string;
  /**
   * A value indicating whether the package is enabled or not.
   */
  isEnabled?: string;
  /**
   * The managed application provider authorizations.
   */
  authorizations: ApplicationProviderAuthorization[];
  /**
   * The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition.
   */
  artifacts?: ApplicationArtifact[];
  /**
   * The managed application definition description.
   */
  description?: string;
  /**
   * The managed application definition package file Uri. Use this element
   */
  packageFileUri?: string;
  /**
   * The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string.
   */
  mainTemplate?: any;
  /**
   * The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string.
   */
  createUiDefinition?: any;
};

/**
 * The managed application provider authorization.
 */
export interface ApplicationProviderAuthorization {
  /**
   * The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources.
   */
  principalId: string;
  /**
   * The provider's role definition identifier. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group.
   */
  roleDefinitionId: string;
}

/**
 * Managed application artifact.
 */
export interface ApplicationArtifact {
  /**
   * The managed application artifact name.
   */
  name?: string;
  /**
   * The managed application artifact blob uri.
   */
  uri?: string;
  /**
   * The managed application artifact type.
   */
  type?: ApplicationArtifactType;
}

/**
 * List of managed application definitions.
 */
export interface ApplicationDefinitionListResult {
  /**
   * The array of managed application definitions.
   */
  value?: ApplicationDefinition[];
  /**
   * The URL to use for getting the next set of results.
   */
  nextLink?: string;
}

/**
 * List of managed applications.
 */
export interface ApplicationListResult {
  /**
   * The array of managed applications.
   */
  value?: Application[];
  /**
   * The URL to use for getting the next set of results.
   */
  nextLink?: string;
}

/**
 * Information about managed application.
 */
export type ApplicationPatchable = GenericResource & {
  /**
   * The plan information.
   */
  plan?: PlanPatchable;
  /**
   * The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
   */
  kind?: string;
  /**
   * The managed resource group Id.
   */
  managedResourceGroupId?: string;
  /**
   * The fully qualified path of managed application definition Id.
   */
  applicationDefinitionId?: string;
  /**
   * Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
   */
  parameters?: any;
  /**
   * Name and value pairs that define the managed application outputs.
   */
  readonly outputs?: any;
  /**
   * The managed application provisioning state.
   */
  readonly provisioningState?: ProvisioningState;
};

/**
 * Plan for the managed application.
 */
export interface PlanPatchable {
  /**
   * The plan name.
   */
  name?: string;
  /**
   * The publisher ID.
   */
  publisher?: string;
  /**
   * The product code.
   */
  product?: string;
  /**
   * The promotion code.
   */
  promotionCode?: string;
  /**
   * The plan's version.
   */
  version?: string;
}

/**
 * Defines values for ProvisioningState.
 */
export type ProvisioningState =
  | "Accepted"
  | "Running"
  | "Ready"
  | "Creating"
  | "Created"
  | "Deleting"
  | "Deleted"
  | "Canceled"
  | "Failed"
  | "Succeeded"
  | "Updating";
/**
 * Defines values for ApplicationLockLevel.
 */
export type ApplicationLockLevel = "CanNotDelete" | "ReadOnly" | "None";
/**
 * Defines values for ApplicationArtifactType.
 */
export type ApplicationArtifactType = "Template" | "Custom";

/**
 * Contains response data for the get operation.
 */
export type ApplicationsGetResponse = Application & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Application;
  };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ApplicationsCreateOrUpdateResponse = Application & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Application;
  };
};

/**
 * Optional parameters.
 */
export interface ApplicationsUpdateOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Parameters supplied to update an existing managed application.
   */
  parameters?: Application;
}

/**
 * Contains response data for the update operation.
 */
export type ApplicationsUpdateResponse = Application & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Application;
  };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ApplicationsListByResourceGroupResponse = ApplicationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ApplicationListResult;
  };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type ApplicationsListBySubscriptionResponse = ApplicationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ApplicationListResult;
  };
};

/**
 * Contains response data for the getById operation.
 */
export type ApplicationsGetByIdResponse = Application & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Application;
  };
};

/**
 * Contains response data for the createOrUpdateById operation.
 */
export type ApplicationsCreateOrUpdateByIdResponse = Application & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Application;
  };
};

/**
 * Optional parameters.
 */
export interface ApplicationsUpdateByIdOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Parameters supplied to update an existing managed application.
   */
  parameters?: Application;
}

/**
 * Contains response data for the updateById operation.
 */
export type ApplicationsUpdateByIdResponse = Application & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Application;
  };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ApplicationsListByResourceGroupNextResponse = ApplicationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ApplicationListResult;
  };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type ApplicationsListBySubscriptionNextResponse = ApplicationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ApplicationListResult;
  };
};

/**
 * Contains response data for the get operation.
 */
export type ApplicationDefinitionsGetResponse = ApplicationDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ApplicationDefinition;
  };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ApplicationDefinitionsCreateOrUpdateResponse = ApplicationDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ApplicationDefinition;
  };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ApplicationDefinitionsListByResourceGroupResponse = ApplicationDefinitionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ApplicationDefinitionListResult;
  };
};

/**
 * Contains response data for the getById operation.
 */
export type ApplicationDefinitionsGetByIdResponse = ApplicationDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ApplicationDefinition;
  };
};

/**
 * Contains response data for the createOrUpdateById operation.
 */
export type ApplicationDefinitionsCreateOrUpdateByIdResponse = ApplicationDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ApplicationDefinition;
  };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ApplicationDefinitionsListByResourceGroupNextResponse = ApplicationDefinitionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ApplicationDefinitionListResult;
  };
};

/**
 * Optional parameters.
 */
export interface ApplicationClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * server parameter
   */
  $host?: string;
  /**
   * Api Version
   */
  apiVersion?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
