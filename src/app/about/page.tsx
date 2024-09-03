"use client"
import AppLayout from "@/components/Layout";
import {List} from "antd";
const AboutPage = () => {
  const list = Array.from({length:300}, (_, index) => index)
  return <AppLayout>
    <div className="container">
    <h1>About Page</h1>
    <List className="w-full md:w-[500px]" split size="small" dataSource={list} renderItem={(item:any) => <List.Item>{item}</List.Item>} />
    </div>
  </AppLayout>;
};

export default AboutPage;