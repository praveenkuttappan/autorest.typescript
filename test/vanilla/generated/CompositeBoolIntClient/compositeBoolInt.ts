/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { CompositeBoolIntContext } from "./compositeBoolIntContext";

class CompositeBoolInt extends CompositeBoolIntContext {
  // Operation groups
  bool: operations.Bool;
  intModel: operations.IntModel;

  /**
   * @class
   * Initializes a new instance of the CompositeBoolInt class.
   * @constructor
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(baseUri?: string, options?: msRest.ServiceClientOptions) {
    super(baseUri, options);
    this.bool = new operations.Bool(this);
    this.intModel = new operations.IntModel(this);
  }
}

// Operation Specifications

export { CompositeBoolInt, Models as CompositeBoolIntModels, Mappers as CompositeBoolIntMappers };
