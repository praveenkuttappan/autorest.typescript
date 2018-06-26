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

const packageName = "";
const packageVersion = "";

export class AutoRestParameterizedHostTestClientContext extends msRest.ServiceClient {
  host?: string;

  /**
   * @class
   * Initializes a new instance of the AutoRestParameterizedHostTestClientContext class.
   * @constructor
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
   * @param {string} [options.host] - A string value that is used as a global part of the parameterized host
   *
   */
  constructor(options?: Models.AutoRestParameterizedHostTestClientOptions) {

    if (!options) {
      options = {};
    }

    super(undefined, options);

    this.host = 'host';
    this.baseUri = "http://{accountName}{host}";

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.host !== null && options.host !== undefined) {
      this.host = options.host;
    }
  }
}
