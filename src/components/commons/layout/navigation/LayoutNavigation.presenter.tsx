import { Fragment } from "react";
import * as B from "./LayoutNavigation.styles";
import type { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS = [
  { name: "잔체 글 보기", page: "/Board", icon: "/images/ic_list.png" },
  { name: "새 글 작성", page: "/Board/Write", icon: "/images/Vector (1).png" },
];

export default function LayoutNavigationUI(
  props: ILayoutNavigationUIProps
): JSX.Element {
  return (
    <B.Wrapper>
      <B.TitleTie>
        <B.TitleIcon src="/images/Vector.png"></B.TitleIcon>
        <B.Title>TALKR</B.Title>
      </B.TitleTie>
      <B.Line></B.Line>
      {NAVIGATION_MENUS.map((el) => (
        <B.Fragment key={el.page}>
          <B.MenuIcon src={el.icon}></B.MenuIcon>
          <B.MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </B.MenuItem>
        </B.Fragment>
      ))}
    </B.Wrapper>
  );
}
