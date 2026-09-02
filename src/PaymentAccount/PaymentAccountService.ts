import { BaseService } from "../Common/BaseService";

export interface PaymentProviderAccountInterface
{
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

export class PaymentAccountService extends BaseService<PaymentProviderAccountInterface>
{
    protected baseUrl = `${this.params.extensionApiUrl}/accounts`;

    getStripeAuthorizeUrl = async(shopIds: string[]): Promise<{ url: string }> => {
        const url = await this.httpClient.get(
            `${this.baseUrl}/stripe/authorize-url`,
            { ...this.requestParams, shopIds },
            {}
        )

        return url;
    }

    disconnect = async(accountId: string): Promise<PaymentProviderAccountInterface> => {
        const account = await this.httpClient.post(
            `${this.baseUrl}/${accountId}/disconnect`,
            {},
            this.requestParams,
            {}
        )

        return account;
    }
}
