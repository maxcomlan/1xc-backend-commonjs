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
export * from "./AdminServiceClient";
export * from "./AssetServiceClient";
export * from "./BusinessServiceClient";
export * from "./ConversionServiceClient";
export * from "./IssuerClient";
export * from "./PropertyServiceClient";
export * from "./MethodServiceClient";
export * from "./MethodAccountServiceClient";
export * from "./UserServiceClient";
export * from "./WalletServiceClient";
export * from "./ServiceClient";
export * from "./JsonServiceClient";
