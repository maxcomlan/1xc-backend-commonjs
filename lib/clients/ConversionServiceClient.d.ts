import { ExchangeCalculation } from "..";
import { ServiceMetadata } from "../peers";
import { ServiceClient } from "./ServiceClient";
export declare class ConversionServiceClient extends ServiceClient {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor();
    getRate(from: string, to: string): Promise<ExchangeCalculation | undefined>;
}
