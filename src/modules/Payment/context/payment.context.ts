import { create } from "zustand";

interface IPaymentFormState {
  existClient: boolean;
  visibleAlert: boolean;
  visibleConfirmModal: boolean;
  isSearching: boolean;

  setVisibleAlert: (val: boolean) => void;
  setVisibleConfirmModal: (val: boolean) => void;
  setSearching: (val: boolean) => void;
  setExistClient: (val: boolean) => void;
}

const initialStatePage: IPaymentFormState = {
  existClient: false,
  visibleAlert: false,
  isSearching: false,
  visibleConfirmModal: false,

  setExistClient: () => {},
  setSearching: () => {},
  setVisibleAlert: () => {},
  setVisibleConfirmModal: () => {},
};

const usePayment = create<IPaymentFormState>((set) => ({
  ...initialStatePage,

  setVisibleAlert: (value: boolean) => set({ visibleAlert: value }),
  setVisibleConfirmModal: (value: boolean) =>
    set({ visibleConfirmModal: value }),
  setSearching: (value: boolean) => set({ isSearching: value }),
  setExistClient: (value: boolean) => set({ existClient: value }),
}));

export default usePayment;
