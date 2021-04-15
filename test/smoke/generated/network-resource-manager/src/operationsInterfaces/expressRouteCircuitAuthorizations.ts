/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import {
  ExpressRouteCircuitAuthorization,
  ExpressRouteCircuitAuthorizationsGetResponse,
  ExpressRouteCircuitAuthorizationsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ExpressRouteCircuitAuthorizations. */
export interface ExpressRouteCircuitAuthorizations {
  /**
   * Gets all authorizations in an express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the circuit.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    circuitName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ExpressRouteCircuitAuthorization>;
  /**
   * Deletes the specified authorization from the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param authorizationName The name of the authorization.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    circuitName: string,
    authorizationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the specified authorization from the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param authorizationName The name of the authorization.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    circuitName: string,
    authorizationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCircuitAuthorizationsGetResponse>;
  /**
   * Creates or updates an authorization in the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param authorizationName The name of the authorization.
   * @param authorizationParameters Parameters supplied to the create or update express route circuit
   *                                authorization operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    circuitName: string,
    authorizationName: string,
    authorizationParameters: ExpressRouteCircuitAuthorization,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<
        ExpressRouteCircuitAuthorizationsCreateOrUpdateResponse
      >,
      ExpressRouteCircuitAuthorizationsCreateOrUpdateResponse
    >
  >;
}