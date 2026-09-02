import { BaseService } from "../Common/BaseService";
export interface PaymentProviderAccountInterface {
    id: string;
    orgId: string;
    shopIds: string[];
    provider: string;
    linkMode: string;
    externalAccountId?: string;
    status: string;
    chargesEnabled: boolean;
    payoutsEnabled: boolean;
    detailsSubmitted: boolean;
    requirementsDue: string[];
    country?: string;
    defaultCurrency?: string;
    lastSyncedAt?: string;
}
export declare class PaymentAccountService extends BaseService<PaymentProviderAccountInterface> {
    protected baseUrl: string;
    getStripeAuthorizeUrl: (shopIds: string[]) => Promise<{
        url: string;
    }>;
    disconnect: (accountId: string) => Promise<PaymentProviderAccountInterface>;
}
