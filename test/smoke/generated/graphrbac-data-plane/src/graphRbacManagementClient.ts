/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  SignedInUserImpl,
  ApplicationsImpl,
  DeletedApplicationsImpl,
  GroupsImpl,
  ServicePrincipalsImpl,
  UsersImpl,
  ObjectsImpl,
  DomainsImpl,
  OAuth2PermissionGrantImpl
} from "./operations";
import {
  SignedInUser,
  Applications,
  DeletedApplications,
  Groups,
  ServicePrincipals,
  Users,
  Objects,
  Domains,
  OAuth2PermissionGrant
} from "./operationsInterfaces";
import { GraphRbacManagementClientContext } from "./graphRbacManagementClientContext";
import { GraphRbacManagementClientOptionalParams } from "./models";

export class GraphRbacManagementClient extends GraphRbacManagementClientContext {
  /**
   * Initializes a new instance of the GraphRbacManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param tenantID The tenant ID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    tenantID: string,
    options?: GraphRbacManagementClientOptionalParams
  ) {
    super(credentials, tenantID, options);
    this.signedInUser = new SignedInUserImpl(this);
    this.applications = new ApplicationsImpl(this);
    this.deletedApplications = new DeletedApplicationsImpl(this);
    this.groups = new GroupsImpl(this);
    this.servicePrincipals = new ServicePrincipalsImpl(this);
    this.users = new UsersImpl(this);
    this.objects = new ObjectsImpl(this);
    this.domains = new DomainsImpl(this);
    this.oAuth2PermissionGrant = new OAuth2PermissionGrantImpl(this);
  }

  signedInUser: SignedInUser;
  applications: Applications;
  deletedApplications: DeletedApplications;
  groups: Groups;
  servicePrincipals: ServicePrincipals;
  users: Users;
  objects: Objects;
  domains: Domains;
  oAuth2PermissionGrant: OAuth2PermissionGrant;
}