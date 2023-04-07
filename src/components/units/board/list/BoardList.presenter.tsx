import * as B from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import {} from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardListUI(props) {
  return (
    <B.All style={{ width: "764px", height: "446px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        <B.Table>
          {props.data?.fetchBoards.map((el) => (
            <B.Tr key={el._id}>
              <B.Ta
                style={{ margin: "10px" }}
                id={el._id}
                onClick={props.onClickSubmit}
              >
                {el.title}
              </B.Ta>
              <B.Tb
                style={{ margin: "10px" }}
                id={el._id}
                onClick={props.onClickSubmit}
              >
                {getDate(el.createdAt)}
              </B.Tb>
            </B.Tr>
          ))}
        </B.Table>
      </InfiniteScroll>
    </B.All>
  );
}
