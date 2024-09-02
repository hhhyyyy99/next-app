"use client"
import AppLayout from "@/components/Layout";
import {useAccount} from "wagmi";

const ProfilePage = () => {
  const {isConnected} = useAccount()
  return <div>profile page{isConnected? "connected" : "not connected"}</div>
}
export default ProfilePage;