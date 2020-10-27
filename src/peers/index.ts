import { ScopedRole } from "../roles";
import { AccessToken } from "..";

export interface ServiceMetadata{
    name: string,
    signature: string,
    host: string,
    port: number
}

export type TokenType = "user" | "admin"; // uat = User Access Token; ses = Session

export interface TokenData{
    type: TokenType;
    method: "ses" | "uat"; // Authentication through session or authentication through user access token
}

export interface UserSESData extends TokenData{
    type: "user";
    method: "ses";
    userId: string;
    firstName: string;
    lastName: string;
}

export interface UserUATData extends TokenData{
    type: "user";
    method: "uat";
    userId: string;
    firstName: string;
    lastName: string;
    token: AccessToken;
}

export interface AdminTokenData extends TokenData{
    type: "admin";
    method: "ses";
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
    data: UserSESData | UserUATData;
}

interface AdminPeer extends BasePeer{
    type: "admin";
    data: AdminTokenData;
}

export type Peer = ServicePeer | UserPeer | AdminPeer;
