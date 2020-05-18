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
  JobStepExecutionsListByJobExecutionOptionalParams,
  JobStepExecutionsListByJobExecutionResponse,
  JobStepExecutionsGetResponse,
  JobStepExecutionsListByJobExecutionNextOptionalParams,
  JobStepExecutionsListByJobExecutionNextResponse
} from "../models";

/**
 * Class representing a JobStepExecutions.
 */
export class JobStepExecutions {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class JobStepExecutions class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Lists the step executions of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param options The options parameters.
   */
  listByJobExecution(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobStepExecutionsListByJobExecutionOptionalParams
  ): Promise<JobStepExecutionsListByJobExecutionResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        options: operationOptions
      },
      listByJobExecutionOperationSpec
    ) as Promise<JobStepExecutionsListByJobExecutionResponse>;
  }

  /**
   * Gets a step execution of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The unique id of the job execution
   * @param stepName The name of the step.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    options?: coreHttp.OperationOptions
  ): Promise<JobStepExecutionsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        stepName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<JobStepExecutionsGetResponse>;
  }

  /**
   * ListByJobExecutionNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param nextLink The nextLink from the previous successful call to the ListByJobExecution method.
   * @param options The options parameters.
   */
  listByJobExecutionNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    nextLink: string,
    options?: JobStepExecutionsListByJobExecutionNextOptionalParams
  ): Promise<JobStepExecutionsListByJobExecutionNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        nextLink,
        options: operationOptions
      },
      listByJobExecutionNextOperationSpec
    ) as Promise<JobStepExecutionsListByJobExecutionNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByJobExecutionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion4,
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.top
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName4,
    Parameters.jobName1,
    Parameters.jobExecutionId1
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecution
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
    Parameters.jobName1,
    Parameters.jobExecutionId3,
    Parameters.stepName
  ],
  serializer
};
const listByJobExecutionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion4,
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.top
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName4,
    Parameters.jobName1,
    Parameters.jobExecutionId1,
    Parameters.nextLink14
  ],
  serializer
};
