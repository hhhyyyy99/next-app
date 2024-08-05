import React, {useCallback, useMemo} from "react";
import {Avatar as AntdAvatar} from "antd";
import type {AvatarProps as AntdAvatarProps} from "antd/lib/avatar";
interface AvatarProps {
  url?: AntdAvatarProps["src"];
  name?: string;
  size?: number;
  onClick?: () => void;
}
export const Avatar = (props:AvatarProps)=>{
  const {url, name,size,onClick} = props;
  const sizeMemo = useMemo(()=> size || 38, [size])
  if(url){
    return <AntdAvatar src={url} size={sizeMemo} onClick={onClick}/>;
  }
  if(name){
    const show = name.slice(0, 1).toUpperCase();
    return <AntdAvatar size={sizeMemo} onClick={onClick}>{show}</AntdAvatar>
  }
}
