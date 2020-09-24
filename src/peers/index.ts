import { ScopedRole } from "../roles";

export interface ServiceMetadata{
    name: string,
    signature: string,
    host: string,
    port: number
}

export type TokenType = "user" | "admin";

export interface TokenData{
    type: TokenType;
}

export interface UserTokenData extends TokenData{
    type: "user";
    userId: string;
    firstName: string;
    lastName: string;
}

export interface AdminTokenData extends TokenData{
    type: "admin";
    userId: string;
    firstName: string;
    lastName: string;
    roles: ScopedRole[];
}

export type PeerType = "service" | TokenType;

export interface BasePeer{
    type: PeerType;
    data: any;
}

interface ServicePeer extends BasePeer{
    type: "service";
    data: ServiceMetadata;
}

interface UserPeer extends BasePeer{
    type: "user";
    data: UserTokenData;
}

interface AdminPeer extends BasePeer{
    type: "admin";
    data: AdminTokenData;
}

export type Peer = ServicePeer | UserPeer | AdminPeer;
