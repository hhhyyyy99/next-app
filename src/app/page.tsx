import Header from "@/components/Header";
import { Button } from 'antd';

export default function Home() {
  return (
   <main>
     <Header/>
     <div>我是内容</div>
     <Button type="primary">按钮</Button>
   </main>
  );
}
