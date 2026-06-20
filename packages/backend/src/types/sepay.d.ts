declare module "sepay-pg-node" {
  export class SePayPgClient {
    constructor(config: {
      env: "sandbox" | "production";
      merchant_id: string;
      secret_key: string;
    });

    checkout: {
      initCheckoutUrl(): string;
      initOneTimePaymentFields(params: {
        operation: "PURCHASE";
        payment_method: "CARD" | "BANK_TRANSFER" | "NAPAS_BANK_TRANSFER";
        order_invoice_number: string;
        order_amount: number;
        currency: string;
        order_description?: string;
        customer_id?: string;
        success_url?: string;
        error_url?: string;
        cancel_url?: string;
        custom_data?: string;
      }): {
        merchant: string;
        operation: string;
        payment_method: string;
        order_invoice_number: string;
        order_amount: string;
        currency: string;
        order_description?: string;
        customer_id?: string;
        success_url?: string;
        error_url?: string;
        cancel_url?: string;
        custom_data?: string;
        signature: string;
        [key: string]: any;
      };
    };

    order: {
      all(query: any): Promise<any>;
      retrieve(orderInvoiceNumber: string): Promise<any>;
      voidTransaction(orderInvoiceNumber: string): Promise<any>;
      cancel(orderInvoiceNumber: string): Promise<any>;
    };
  }
}
