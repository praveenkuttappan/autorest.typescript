/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SystemAssignedIdentities } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ManagedServiceIdentityClientContext } from "../managedServiceIdentityClientContext";
import {
  SystemAssignedIdentitiesGetByScopeOptionalParams,
  SystemAssignedIdentitiesGetByScopeResponse
} from "../models";

/** Class representing a SystemAssignedIdentities. */
export class SystemAssignedIdentitiesImpl implements SystemAssignedIdentities {
  private readonly client: ManagedServiceIdentityClientContext;

  /**
   * Initialize a new instance of the class SystemAssignedIdentities class.
   * @param client Reference to the service client
   */
  constructor(client: ManagedServiceIdentityClientContext) {
    this.client = client;
  }

  /**
   * Gets the systemAssignedIdentity available under the specified RP scope.
   * @param scope The resource provider scope of the resource. Parent resource being extended by Managed
   *              Identities.
   * @param options The options parameters.
   */
  getByScope(
    scope: string,
    options?: SystemAssignedIdentitiesGetByScopeOptionalParams
  ): Promise<SystemAssignedIdentitiesGetByScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      getByScopeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getByScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.ManagedIdentity/identities/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SystemAssignedIdentity
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
