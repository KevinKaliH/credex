import {
  InitialSearchResponse,
  SearchResponseVM,
} from "@/models/core/PaymentView.model";
import { create } from "zustand";

interface IPaymentFormState {
  existClient: boolean;
  visibleAlert: boolean;
  visibleConfirmModal: boolean;
  isSearching: boolean;
  btnClicked: string;

  searchResult: SearchResponseVM;

  setVisibleAlert: (val: boolean) => void;
  setVisibleConfirmModal: (val: boolean) => void;
  setSearching: (val: boolean) => void;
  setExistClient: (val: boolean) => void;
  setBtnClicked: (val: string) => void;
  resetState: () => void;
  setSearchResponse: (data: SearchResponseVM) => void;
}

const initialStatePage: IPaymentFormState = {
  btnClicked: "",
  existClient: false,
  isSearching: false,
  visibleAlert: false,
  visibleConfirmModal: false,
  searchResult: InitialSearchResponse,

  setBtnClicked: () => {},
  setSearching: () => {},
  setExistClient: () => {},
  setVisibleAlert: () => {},
  setVisibleConfirmModal: () => {},
  resetState: () => {},
  setSearchResponse: () => {},
};

const usePayment = create<IPaymentFormState>((set) => ({
  ...initialStatePage,

  setVisibleAlert: (value: boolean) => set({ visibleAlert: value }),
  setVisibleConfirmModal: (value: boolean) =>
    set({ visibleConfirmModal: value }),
  setSearching: (value: boolean) => set({ isSearching: value }),
  setExistClient: (value: boolean) => set({ existClient: value }),
  setBtnClicked: (value: string) => set({ btnClicked: value }),
  resetState: () =>
    set({
      btnClicked: "",
      existClient: false,
      isSearching: false,
      visibleAlert: false,
      visibleConfirmModal: false,
      searchResult: InitialSearchResponse,
    }),
  setSearchResponse: (value: SearchResponseVM) => set({ searchResult: value }),
}));

export default usePayment;
