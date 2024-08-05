import {Avatar as AntdAvatar} from "antd";
import React, {useMemo} from "react";
import type {AvatarProps as AntdAvatarProps} from "antd/lib/avatar/avatar";

interface bigImgProps {
  url?: AntdAvatarProps["src"];
  name?: string;
  size?: number;
}

interface smallImgProps {
  url?: AntdAvatarProps["src"];
  name?: string;
  size?: number;
}

interface DoubleAvatarProps {
  mainImg: bigImgProps;
  smallImg?: smallImgProps;
}

export const DoubleAvatar = (props: DoubleAvatarProps) => {
  const {mainImg} = props;
  const {url: mainUrl, name: mainName, size: mainSize = 38} = mainImg;
  const mainShow = useMemo(()=>mainName&&mainName.slice(0, 1).toUpperCase(),[mainName]);
  const mainFontSize = `${mainSize/2}px`
  const isHaveSmallImg = useMemo(() => props.smallImg, [props.smallImg])
  if (!isHaveSmallImg) {
    return <AntdAvatar style={{fontSize: mainFontSize}} src={mainUrl} size={mainSize}>{mainShow}</AntdAvatar>
  }
  const {url: smallUrl, name: smallName, size: smallSize = 19} = isHaveSmallImg;
  const smallFontSize = `${smallSize/2}px`
  const smallShow = useMemo(() => smallName&&smallName.slice(0, 1).toUpperCase(),[smallName]);
  const smallBgColor = useMemo(() => smallUrl ? "transparent" : smallShow && "#bfbfbf" || "rgba(0,0,0,0.25)", [smallShow,smallUrl]);
  return <div className={`relative w-[${mainSize}px]`}>
    <AntdAvatar style={{fontSize: mainFontSize}} src={mainUrl} size={mainSize}>{mainShow}</AntdAvatar>
    <AntdAvatar style={{position: "absolute", top: "52%", right: "-8%",fontSize: smallFontSize, background: smallBgColor}} src={smallUrl} size={smallSize}>{smallShow}</AntdAvatar>
  </div>
};
