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
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import {
  CollectionPartitionListMetricsResponse,
  CollectionPartitionListUsagesOptionalParams,
  CollectionPartitionListUsagesResponse
} from "../models";

/**
 * Class representing a CollectionPartition.
 */
export class CollectionPartition {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class CollectionPartition class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given collection, split by partition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  listMetrics(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    filter: string,
    options?: coreHttp.OperationOptions
  ): Promise<CollectionPartitionListMetricsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        databaseRid,
        collectionRid,
        filter,
        options: operationOptions
      },
      listMetricsOperationSpec
    ) as Promise<CollectionPartitionListMetricsResponse>;
  }

  /**
   * Retrieves the usages (most recent storage data) for the given collection, split by partition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The options parameters.
   */
  listUsages(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    options?: CollectionPartitionListUsagesOptionalParams
  ): Promise<CollectionPartitionListUsagesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        databaseRid,
        collectionRid,
        options: operationOptions
      },
      listUsagesOperationSpec
    ) as Promise<CollectionPartitionListUsagesResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartitionMetricListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listUsagesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartitionUsagesResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  headerParameters: [Parameters.accept],
  serializer
};