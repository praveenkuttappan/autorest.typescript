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
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  RestorePointsListByDatabaseResponse,
  CreateDatabaseRestorePointDefinition,
  RestorePointsCreateResponse,
  RestorePointsGetResponse
} from "../models";

/**
 * Class representing a RestorePoints.
 */
export class RestorePoints {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class RestorePoints class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of database restore points.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<RestorePointsListByDatabaseResponse> {
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
      listByDatabaseOperationSpec
    ) as Promise<RestorePointsListByDatabaseResponse>;
  }

  /**
   * Creates a restore point for a data warehouse.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The definition for creating the restore point of this database.
   * @param options The options parameters.
   */
  async create(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: CreateDatabaseRestorePointDefinition,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<RestorePointsCreateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        RestorePointsCreateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Gets a restore point.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    restorePointName: string,
    options?: coreHttp.OperationOptions
  ): Promise<RestorePointsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        restorePointName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<RestorePointsGetResponse>;
  }

  /**
   * Deletes a restore point.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    restorePointName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        restorePointName,
        options: operationOptions
      },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByDatabaseOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePointListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName2
  ],
  serializer
};
const createOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePoint
    },
    201: {
      bodyMapper: Mappers.RestorePoint
    },
    202: {
      bodyMapper: Mappers.RestorePoint
    },
    204: {
      bodyMapper: Mappers.RestorePoint
    }
  },
  requestBody: Parameters.parameters45,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName2
  ],
  headerParameters: [Parameters.contentType],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints/{restorePointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePoint
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName2,
    Parameters.restorePointName
  ],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints/{restorePointName}",
  httpMethod: "DELETE",
  responses: { 200: {}, default: {} },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName2,
    Parameters.restorePointName
  ],
  serializer
};
