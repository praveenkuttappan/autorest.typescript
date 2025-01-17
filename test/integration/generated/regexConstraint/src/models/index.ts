/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Optional parameters. */
export interface RegexConstraintApiV1ValueGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the apiV1ValueGet operation. */
export type RegexConstraintApiV1ValueGetResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface RegexConstraintOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
