import { PaymentFormModel } from "@payment/utils/paymentForm.model";

async function searchClient(_: PaymentFormModel) {
  return new Promise((res: any, _: any) => {
    setTimeout(() => {
      res({ ok: true });
    }, 600);
  });
}

export default {
  searchClient,
};
