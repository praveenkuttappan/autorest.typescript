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
import { AutoRestSwaggerBATFormDataServiceContext } from "./autoRestSwaggerBATFormDataServiceContext";

class AutoRestSwaggerBATFormDataService extends AutoRestSwaggerBATFormDataServiceContext {
  // Operation groups
  formdata: operations.Formdata;

  /**
   * @class
   * Initializes a new instance of the AutoRestSwaggerBATFormDataService class.
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
    this.formdata = new operations.Formdata(this);
  }
}

// Operation Specifications

export { AutoRestSwaggerBATFormDataService, Models as AutoRestSwaggerBATFormDataServiceModels, Mappers as AutoRestSwaggerBATFormDataServiceMappers };
