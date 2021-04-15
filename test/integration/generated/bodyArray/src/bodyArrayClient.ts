/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ArrayImpl } from "./operations";
import { Array } from "./operationsInterfaces";
import { BodyArrayClientContext } from "./bodyArrayClientContext";
import { BodyArrayClientOptionalParams } from "./models";

export class BodyArrayClient extends BodyArrayClientContext {
  /**
   * Initializes a new instance of the BodyArrayClient class.
   * @param options The parameter options
   */
  constructor(options?: BodyArrayClientOptionalParams) {
    super(options);
    this.array = new ArrayImpl(this);
  }

  array: Array;
}