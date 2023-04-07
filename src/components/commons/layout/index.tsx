import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { gql } from "@apollo/client";
interface IProps {
  children: JSX.Element;
}

const All = styled.div`
  position: relative;
  width: 1024px;
  height: 768px;
  background: #fafafa;
  display: flex;
`;

const Tie = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  margin-left: 30px;
`;

export default function Layout(props: IProps): JSX.Element {
  const router = useRouter();

  const HIDDEN_BANNER = [`/Board/Write`, `/Board/${router.query.boardId}/edit`];

  console.log(router.asPath);

  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    <>
      <All>
        {/* {!isHiddenHeader && <LayoutHeader />} */}
        <LayoutNavigation />
        <Tie>
          {!isHiddenBanner && <LayoutBanner />}
          <Main>{props.children}</Main>
        </Tie>
      </All>
    </>
  );
}
