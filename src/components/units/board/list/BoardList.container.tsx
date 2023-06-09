import { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARDS,
  DELETE_BOARD,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";

export default function StaticRoutingPage() {
  const router = useRouter();
  const { data, refetch, fetchMore } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const { data: dataBoardsOfTheBest } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  const onClickDelete = (event: React.ChangeEvent<HTMLInputElement>) => {
    deleteBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  const onClickSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`/Board/${event.target.id}`);
  };

  const onClickWrite = () => {
    router.push(`/Board/Write`);
  };

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <>
      <BoardListUI
        onClickDelete={onClickDelete}
        onClickSubmit={onClickSubmit}
        onClickWrite={onClickWrite}
        onLoadMore={onLoadMore}
        data={data}
        count={dataBoardsCount?.fetchBoardsCount}
        best={dataBoardsOfTheBest}
        refetch={refetch}
      />
    </>
  );
}
