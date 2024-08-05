export interface Chain {
  chainId: string;
  chainName: string;
  chainIcon: string;
}

export interface Token {
  chainId:Chain["chainId"];
  chainName:Chain["chainName"];
  id:number;
  tokenAddress:`0x${string}`;
  tokenIconUrl:string;
  tokenName:string;
  tokenSymbol:string;
}