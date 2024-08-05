import * as React from 'react';
import {Connector, useAccount, useChainId, useConnect} from 'wagmi';
import {Avatar} from "@/components/Avatar";
import {getWalletIcon} from "@/utils";
import {message, Spin} from "antd";

const Connect = () => {
  const chainId = useChainId();
  const {connectors, connect} = useConnect();
  const handleConnect = (connector: Connector) => {
    message.success('连接钱包');
    connect({connector, chainId});
  }
  return (
    <div className="flex flex-col items-center gap-2">
      <header>连接钱包</header>
      <div className="grid grid-cols-3 gap-4">
        {connectors.map((connector) => (
          <ConnectorItem
            key={connector.uid}
            connector={connector}
            callback={() => handleConnect(connector)}
          />
        ))}
      </div>
    </div>
  );
}

function ConnectorItem({connector, callback}: {
  connector: Connector;
  callback: () => void;
}) {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector, setReady]);

  return (
    <div className={`w-[72px] h-[72px] rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-300`}>
      <Spin spinning={!ready}>
      <Avatar url={getWalletIcon(connector)} name={connector.name} onClick={()=>{
          if(ready){
            callback()
          }
        }} />
      </Spin>
    </div>
  );
}
export default Connect;
