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
import { ADHybridHealthService } from "../aDHybridHealthService";
import { AddsServicesReplicationStatusGetResponse } from "../models";

/**
 * Class representing a AddsServicesReplicationStatus.
 */
export class AddsServicesReplicationStatus {
  private readonly client: ADHybridHealthService;

  /**
   * Initialize a new instance of the class AddsServicesReplicationStatus class.
   * @param client Reference to the service client
   */
  constructor(client: ADHybridHealthService) {
    this.client = client;
  }

  /**
   * Gets Replication status for a given Active Directory Domain Service, that is onboarded to Azure
   * Active Directory Connect Health.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  get(
    serviceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<AddsServicesReplicationStatusGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      getOperationSpec
    ) as Promise<AddsServicesReplicationStatusGetResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/replicationstatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReplicationStatus
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};