/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  TransparentDataEncryption,
  TransparentDataEncryptionsCreateOrUpdateResponse,
  TransparentDataEncryptionsGetResponse
} from "../models";

/**
 * Class representing a TransparentDataEncryptions.
 */
export class TransparentDataEncryptions {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class TransparentDataEncryptions class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Creates or updates a database's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The required parameters for creating or updating transparent data encryption.
   * @param databaseName The name of the database for which setting the transparent data encryption
   *                     applies.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    parameters: TransparentDataEncryption,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<TransparentDataEncryptionsCreateOrUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        parameters,
        databaseName,
        options: operationOptions
      },
      createOrUpdateOperationSpec
    ) as Promise<TransparentDataEncryptionsCreateOrUpdateResponse>;
  }

  /**
   * Gets a database's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which the transparent data encryption applies.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<TransparentDataEncryptionsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<TransparentDataEncryptionsGetResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryption
    },
    201: {
      bodyMapper: Mappers.TransparentDataEncryption
    }
  },
  requestBody: Parameters.parameters16,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName15,
    Parameters.transparentDataEncryptionName
  ],
  headerParameters: [Parameters.contentType],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryption
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.transparentDataEncryptionName,
    Parameters.databaseName16
  ],
  serializer
};
