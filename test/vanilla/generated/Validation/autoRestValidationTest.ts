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
import { AutoRestValidationTestContext } from "./autoRestValidationTestContext";

class AutoRestValidationTest extends AutoRestValidationTestContext {
  /**
   * @class
   * Initializes a new instance of the AutoRestValidationTest class.
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
  constructor(subscriptionId: string, apiVersion: string, baseUri?: string, options?: msRest.ServiceClientOptions) {
    super(subscriptionId, apiVersion, baseUri, options);
  }
  // methods on the client.

  /**
   * Validates input parameters on the method. See swagger for details.
   *
   * @param {string} resourceGroupName Required string between 3 and 10 chars with pattern
   * [a-zA-Z0-9]+.
   *
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async validationOfMethodParametersWithHttpOperationResponse(resourceGroupName: string, id: number, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Product>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.sendOperationRequest(
        msRest.createOperationArguments(
          {
            "this.subscriptionId": this.subscriptionId,
            resourceGroupName,
            id,
            "this.apiVersion": this.apiVersion
          },
          options),
        validationOfMethodParametersOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }
  // methods on the client.

  /**
   * Validates body parameters on the method. See swagger for details.
   *
   * @param {string} resourceGroupName Required string between 3 and 10 chars with pattern
   * [a-zA-Z0-9]+.
   *
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   *
   * @param {AutoRestValidationTestValidationOfBodyOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async validationOfBodyWithHttpOperationResponse(resourceGroupName: string, id: number, options?: Models.AutoRestValidationTestValidationOfBodyOptionalParams): Promise<msRest.HttpOperationResponse<Models.Product>> {
    let body = (options && options.body !== undefined) ? options.body : undefined;

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.sendOperationRequest(
        msRest.createOperationArguments(
          {
            "this.subscriptionId": this.subscriptionId,
            resourceGroupName,
            id,
            body,
            "this.apiVersion": this.apiVersion
          },
          options),
        validationOfBodyOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }
  // methods on the client.

  /**
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getWithConstantInPathWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let constantParam = 'constant';

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.sendOperationRequest(
        msRest.createOperationArguments(
          {
            constantParam
          },
          options),
        getWithConstantInPathOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }
  // methods on the client.

  /**
   * @param {AutoRestValidationTestPostWithConstantInBodyOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async postWithConstantInBodyWithHttpOperationResponse(options?: Models.AutoRestValidationTestPostWithConstantInBodyOptionalParams): Promise<msRest.HttpOperationResponse<Models.Product>> {
    let body = (options && options.body !== undefined) ? options.body : undefined;
    let constantParam = 'constant';

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.sendOperationRequest(
        msRest.createOperationArguments(
          {
            constantParam,
            body
          },
          options),
        postWithConstantInBodyOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Validates input parameters on the method. See swagger for details.
   *
   * @param {string} resourceGroupName Required string between 3 and 10 chars with pattern
   * [a-zA-Z0-9]+.
   *
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.Product} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Product} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  validationOfMethodParameters(resourceGroupName: string, id: number): Promise<Models.Product>;
  validationOfMethodParameters(resourceGroupName: string, id: number, options: msRest.RequestOptionsBase): Promise<Models.Product>;
  validationOfMethodParameters(resourceGroupName: string, id: number, callback: msRest.ServiceCallback<Models.Product>): void;
  validationOfMethodParameters(resourceGroupName: string, id: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Product>): void;
  validationOfMethodParameters(resourceGroupName: string, id: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Product>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.Product>;
    if (!callback) {
      return this.validationOfMethodParametersWithHttpOperationResponse(resourceGroupName, id, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.Product);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.validationOfMethodParametersWithHttpOperationResponse(resourceGroupName, id, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.Product;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Validates body parameters on the method. See swagger for details.
   *
   * @param {string} resourceGroupName Required string between 3 and 10 chars with pattern
   * [a-zA-Z0-9]+.
   *
   * @param {number} id Required int multiple of 10 from 100 to 1000.
   *
   * @param {AutoRestValidationTestValidationOfBodyOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.Product} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Product} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  validationOfBody(resourceGroupName: string, id: number): Promise<Models.Product>;
  validationOfBody(resourceGroupName: string, id: number, options: Models.AutoRestValidationTestValidationOfBodyOptionalParams): Promise<Models.Product>;
  validationOfBody(resourceGroupName: string, id: number, callback: msRest.ServiceCallback<Models.Product>): void;
  validationOfBody(resourceGroupName: string, id: number, options: Models.AutoRestValidationTestValidationOfBodyOptionalParams, callback: msRest.ServiceCallback<Models.Product>): void;
  validationOfBody(resourceGroupName: string, id: number, options?: Models.AutoRestValidationTestValidationOfBodyOptionalParams, callback?: msRest.ServiceCallback<Models.Product>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.Product>;
    if (!callback) {
      return this.validationOfBodyWithHttpOperationResponse(resourceGroupName, id, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.Product);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.validationOfBodyWithHttpOperationResponse(resourceGroupName, id, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.Product;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getWithConstantInPath(): Promise<void>;
  getWithConstantInPath(options: msRest.RequestOptionsBase): Promise<void>;
  getWithConstantInPath(callback: msRest.ServiceCallback<void>): void;
  getWithConstantInPath(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getWithConstantInPath(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getWithConstantInPathWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getWithConstantInPathWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * @param {AutoRestValidationTestPostWithConstantInBodyOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.Product} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Product} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  postWithConstantInBody(): Promise<Models.Product>;
  postWithConstantInBody(options: Models.AutoRestValidationTestPostWithConstantInBodyOptionalParams): Promise<Models.Product>;
  postWithConstantInBody(callback: msRest.ServiceCallback<Models.Product>): void;
  postWithConstantInBody(options: Models.AutoRestValidationTestPostWithConstantInBodyOptionalParams, callback: msRest.ServiceCallback<Models.Product>): void;
  postWithConstantInBody(options?: Models.AutoRestValidationTestPostWithConstantInBodyOptionalParams, callback?: msRest.ServiceCallback<Models.Product>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.Product>;
    if (!callback) {
      return this.postWithConstantInBodyWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.Product);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postWithConstantInBodyWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.Product;
        return cb(err, result, data.request, data);
      });
    }
  }
}

// Operation Specifications
const validationOfMethodParametersOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "fakepath/{subscriptionId}/{resourceGroupName}/{id}",
  urlParameters: [
    {
      parameterPath: "this.subscriptionId",
      mapper: {
        required: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    },
    {
      parameterPath: "resourceGroupName",
      mapper: {
        required: true,
        serializedName: "resourceGroupName",
        constraints: {
          MaxLength: 10,
          MinLength: 3,
          Pattern: /[a-zA-Z0-9]+/
        },
        type: {
          name: "String"
        }
      }
    },
    {
      parameterPath: "id",
      mapper: {
        required: true,
        serializedName: "id",
        constraints: {
          InclusiveMaximum: 1000,
          InclusiveMinimum: 100,
          MultipleOf: 10
        },
        type: {
          name: "Number"
        }
      }
    }
  ],
  queryParameters: [
    {
      parameterPath: "this.apiVersion",
      mapper: {
        required: true,
        serializedName: "apiVersion",
        constraints: {
          Pattern: /\d{2}-\d{2}-\d{4}/
        },
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const validationOfBodyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "fakepath/{subscriptionId}/{resourceGroupName}/{id}",
  urlParameters: [
    {
      parameterPath: "this.subscriptionId",
      mapper: {
        required: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    },
    {
      parameterPath: "resourceGroupName",
      mapper: {
        required: true,
        serializedName: "resourceGroupName",
        constraints: {
          MaxLength: 10,
          MinLength: 3,
          Pattern: /[a-zA-Z0-9]+/
        },
        type: {
          name: "String"
        }
      }
    },
    {
      parameterPath: "id",
      mapper: {
        required: true,
        serializedName: "id",
        constraints: {
          InclusiveMaximum: 1000,
          InclusiveMinimum: 100,
          MultipleOf: 10
        },
        type: {
          name: "Number"
        }
      }
    }
  ],
  queryParameters: [
    {
      parameterPath: "this.apiVersion",
      mapper: {
        required: true,
        serializedName: "apiVersion",
        constraints: {
          Pattern: /\d{2}-\d{2}-\d{4}/
        },
        type: {
          name: "String"
        }
      }
    }
  ],
  requestBody: {
    parameterPath: "body",
    mapper: Mappers.Product
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getWithConstantInPathOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "validation/constantsInPath/{constantParam}/value",
  urlParameters: [
    {
      parameterPath: "constantParam",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "constantParam",
        defaultValue: 'constant',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {}
  },
  serializer: new msRest.Serializer(Mappers)
};

const postWithConstantInBodyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "validation/constantsInPath/{constantParam}/value",
  urlParameters: [
    {
      parameterPath: "constantParam",
      mapper: {
        required: true,
        isConstant: true,
        serializedName: "constantParam",
        defaultValue: 'constant',
        type: {
          name: "String"
        }
      }
    }
  ],
  requestBody: {
    parameterPath: "body",
    mapper: Mappers.Product
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {}
  },
  serializer: new msRest.Serializer(Mappers)
};

export { AutoRestValidationTest, Models as AutoRestValidationTestModels, Mappers as AutoRestValidationTestMappers };
