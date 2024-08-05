import { useAccount, useDisconnect} from 'wagmi';
import Avatar from "@/components/Avatar";
import {copyText, shortenAddress} from "@/utils";
import {Token} from "@/constants";
import {getWalletIcon} from "@/utils";
import {useMemo} from "react";

const AccountItemClassName = `bg-gray-200 rounded-full py-2 px-3 cursor-pointer hover:bg-gray-300 transition duration-200 hover ease-in-out`;
const Account = () => {
  const { address, connector } = useAccount();
  const { disconnect } = useDisconnect();
  // const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const formattedAddress = useMemo(() => shortenAddress(address), [address]);
  if (!address) return;
  const handleShare = (tokenAddress:Token["tokenAddress"])=>{
    const url = `https://etherscan.io/address/${tokenAddress}`;
    window.open(url, '_blank');
  }
  return <div className="flex gap-3 bg-white rounded-md p-2.5">
    <Avatar url={getWalletIcon(connector)} size={88}></Avatar>
    <div className="flex-1 flex flex-col gap-2">
      <p className={AccountItemClassName} onClick={() => copyText(address)}>{formattedAddress}</p>
      <p className="flex gap-2 justify-between">
        <span className={AccountItemClassName} onClick={()=>handleShare(address)}>分享</span>
        <span className={`${AccountItemClassName} bg-purple-50 hover:bg-purple-100`} onClick={() => disconnect()}>断开</span>
      </p>
    </div>
  </div>
}
export default Account;