import exchangeSvg from "@/assets/exchange.svg";
import smartphone from "@/assets/smartphone.svg";
import billWallet from "@/assets/billWallet.svg";
import wallet from "@/assets/wallet.svg";

export interface ILink {
  icon: string;
  label: string;
  link: string;
  fill: string;
}

export const CARDS_LINKS: ILink[] = [
  { icon: exchangeSvg, label: "Mesa de cambio", link: "", fill: "green" },
  {
    icon: smartphone,
    label: "Recargas telefonicas",
    link: "",
    fill: "skyBlue",
  },
  { icon: billWallet, label: "Pago de servicios", link: "", fill: "orange" },
  { icon: wallet, label: "Recarga de billetera", link: "", fill: "blue" },
];
