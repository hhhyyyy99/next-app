import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

const AppLayout = ({children}: { children:React.ReactNode }) => {
  return (
    <div className="app-layout">
      <Header/>
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
};

export default AppLayout;