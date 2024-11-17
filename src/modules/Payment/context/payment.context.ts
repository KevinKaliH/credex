import { create } from "zustand";

interface IPaymentFormState {
  existClient: boolean;
  visibleAlert: boolean;
  visibleConfirmModal: boolean;
  isSearching: boolean;
  btnClicked: string;

  setVisibleAlert: (val: boolean) => void;
  setVisibleConfirmModal: (val: boolean) => void;
  setSearching: (val: boolean) => void;
  setExistClient: (val: boolean) => void;
  setBtnClicked: (val: string) => void;
  resetState: () => void;
}

const initialStatePage: IPaymentFormState = {
  btnClicked: "",
  existClient: false,
  isSearching: false,
  visibleAlert: false,
  visibleConfirmModal: false,

  setBtnClicked: () => {},
  setSearching: () => {},
  setExistClient: () => {},
  setVisibleAlert: () => {},
  setVisibleConfirmModal: () => {},
  resetState: () => {},
};

const usePayment = create<IPaymentFormState>((set) => ({
  ...initialStatePage,

  setVisibleAlert: (value: boolean) => set({ visibleAlert: value }),
  setVisibleConfirmModal: (value: boolean) =>
    set({ visibleConfirmModal: value }),
  setSearching: (value: boolean) => set({ isSearching: value }),
  setExistClient: (value: boolean) => set({ existClient: value }),
  setBtnClicked: (value: string) => set({ btnClicked: value }),
  resetState: () => set({ ...initialStatePage }),
}));

export default usePayment;
