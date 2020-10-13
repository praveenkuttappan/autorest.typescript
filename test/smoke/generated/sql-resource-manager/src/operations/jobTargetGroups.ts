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
  JobTargetGroupsListByAgentResponse,
  JobTargetGroupsGetResponse,
  JobTargetGroup,
  JobTargetGroupsCreateOrUpdateResponse,
  JobTargetGroupsListByAgentNextResponse
} from "../models";

/**
 * Class representing a JobTargetGroups.
 */
export class JobTargetGroups {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class JobTargetGroups class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets all target groups in an agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param options The options parameters.
   */
  listByAgent(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: coreHttp.OperationOptions
  ): Promise<JobTargetGroupsListByAgentResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        options: operationOptions
      },
      listByAgentOperationSpec
    ) as Promise<JobTargetGroupsListByAgentResponse>;
  }

  /**
   * Gets a target group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    targetGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<JobTargetGroupsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        targetGroupName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<JobTargetGroupsGetResponse>;
  }

  /**
   * Creates or updates a target group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param parameters The requested state of the target group.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    targetGroupName: string,
    parameters: JobTargetGroup,
    options?: coreHttp.OperationOptions
  ): Promise<JobTargetGroupsCreateOrUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        targetGroupName,
        parameters,
        options: operationOptions
      },
      createOrUpdateOperationSpec
    ) as Promise<JobTargetGroupsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a target group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    targetGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        targetGroupName,
        options: operationOptions
      },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * ListByAgentNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param nextLink The nextLink from the previous successful call to the ListByAgent method.
   * @param options The options parameters.
   */
  listByAgentNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<JobTargetGroupsListByAgentNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        nextLink,
        options: operationOptions
      },
      listByAgentNextOperationSpec
    ) as Promise<JobTargetGroupsListByAgentNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByAgentOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobTargetGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobTargetGroup
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.targetGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.JobTargetGroup
    },
    201: {
      bodyMapper: Mappers.JobTargetGroup
    },
    default: {}
  },
  requestBody: Parameters.parameters38,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.targetGroupName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.targetGroupName
  ],
  serializer
};
const listByAgentNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobTargetGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};