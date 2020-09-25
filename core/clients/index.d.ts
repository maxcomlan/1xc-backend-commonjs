import { ServiceMetadata } from "../peers";
/**
 * Setup proxy url of every client available.
 * @param url - the base url of the proxy that interconnects queryable rest apis of services
 */
export declare function configureProxyEndpoint(url: string): void;
/**
 * Setup client metadata on every client code connection to any service
 * @param meta the metadatas of the connecting client
 */
export declare function configureClientMetadata(meta: ServiceMetadata): void;
export declare function configureProxyAccess(url: string, meta: ServiceMetadata): void;
export { AdminServiceClient } from "./AdminServiceClient";
export { AssetServiceClient } from "./AssetServiceClient";
export { BusinessServiceClient } from "./BusinessServiceClient";
export { ConversionServiceClient } from "./ConversionServiceClient";
export { IssuerClient } from "./IssuerClient";
export { PropertyServiceClient } from "./PropertyServiceClient";
export { UserServiceClient } from "./UserServiceClient";
export { WalletServiceClient } from "./WalletServiceClient";
export { ServiceAccess, ServiceClient } from "./ServiceClient";
export { JsonServiceClient } from "./JsonServiceClient";
