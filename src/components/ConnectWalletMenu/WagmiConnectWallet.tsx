import { useConnectWalletMenuStore } from '@/store/connectWalletMenu';
import ConnectWallet from '../ConnectWallet';

export const WagmiConnectWallet = () => {
  const { visible, setVisible } = useConnectWalletMenuStore();

  const el = () => (
    <>
      <div
        className={`w-full fixed bottom-0 left-0 right-0 transition-transform rounded-t-lg
    md:w-[288px] md:absolute md:top-20 md:right-3.5 md:bottom-auto md:left-auto
    md:rounded-lg bg-white p-3 z-50 ${visible ? 'translate-y-0 md:block' : 'translate-y-[200%] md:hidden'}`}
      >
        <ConnectWallet />
      </div>
      {visible && <div className="fixed top-0 left-0 w-full h-full md:bg-transparent bg-black opacity-50" onClick={() => setVisible(false)}></div>}
    </>
  );
  return el();
};
