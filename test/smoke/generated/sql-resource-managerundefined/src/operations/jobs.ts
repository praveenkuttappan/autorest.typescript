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
  JobsListByAgentResponse,
  JobsGetResponse,
  Job,
  JobsCreateOrUpdateResponse,
  JobsListByAgentNextResponse
} from "../models";

/**
 * Class representing a Jobs.
 */
export class Jobs {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class Jobs class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of jobs.
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
  ): Promise<JobsListByAgentResponse> {
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
    ) as Promise<JobsListByAgentResponse>;
  }

  /**
   * Gets a job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: coreHttp.OperationOptions
  ): Promise<JobsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<JobsGetResponse>;
  }

  /**
   * Creates or updates a job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param parameters The requested job state.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    parameters: Job,
    options?: coreHttp.OperationOptions
  ): Promise<JobsCreateOrUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        parameters,
        options: operationOptions
      },
      createOrUpdateOperationSpec
    ) as Promise<JobsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to delete.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
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
        jobName,
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
  ): Promise<JobsListByAgentNextResponse> {
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
    ) as Promise<JobsListByAgentNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByAgentOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName4
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName4,
    Parameters.jobName1
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    201: {
      bodyMapper: Mappers.Job
    },
    default: {}
  },
  requestBody: Parameters.parameters36,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName4,
    Parameters.jobName1
  ],
  headerParameters: [Parameters.contentType],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName4,
    Parameters.jobName2
  ],
  serializer
};
const listByAgentNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName4,
    Parameters.nextLink12
  ],
  serializer
};
