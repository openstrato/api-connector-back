import { BaseService } from "../Common/BaseService";

export interface PaymentProviderAccountInterface
{
    id: string;
    orgId: string;
    shopIds: string[];
    provider: string;
    linkMode: string;
    externalAccountId?: string;
    previousExternalAccountIds: string[];
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
        try {
            return await this.httpClient.get(
                `${this.baseUrl}/stripe/authorize-url`,
                { ...this.requestParams, shopIds },
                {}
            )
        } catch (error: any) {
            throw new Error(error.response?.data?.message ?? error.message)
        }
    }

    // The reconnect-url and authorize-url endpoints return 409 with { message, conflictingAccountId }
    // when the requested shops are already scoped to another account — surface that message as-is
    // instead of the generic axios "Request failed with status code 409".
    getReconnectUrl = async(accountId: string): Promise<{ url: string }> => {
        try {
            return await this.httpClient.get(
                `${this.baseUrl}/${accountId}/stripe/reconnect-url`,
                this.requestParams,
                {}
            )
        } catch (error: any) {
            throw new Error(error.response?.data?.message ?? error.message)
        }
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

    updateShopIds = async(accountId: string, shopIds: string[]): Promise<PaymentProviderAccountInterface> => {
        const account = await this.httpClient.patch(
            `${this.baseUrl}/${accountId}`,
            { shopIds },
            this.requestParams,
            {}
        )

        return account;
    }
}
