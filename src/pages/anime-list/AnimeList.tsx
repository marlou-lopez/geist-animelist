import { Loading } from "@geist-ui/react";
import { useQuery } from "react-query";
import ErrorView from "../../components/views/ErrorView";
import GridView from "../../components/views/GridView";
import ListView from "../../components/views/ListView";
import { getList } from "../../services/anime-list";
import { Status } from "./AnimeListContainer";

interface IAnimeListProps {
  type: Status,
  view?: 'grid' | 'list';
}

const AnimeList: React.FC<IAnimeListProps> = ({ type, view }) => {
  const { data, isLoading, isError } = useQuery(type, getList, {
    refetchOnWindowFocus: false
  });

  if (isLoading) {
    return <Loading />
  }

  if (view === 'list') {
    return <ListView list={data} />
  }

  if (isError) {
    return <ErrorView />
  }

  return <GridView list={data} />;
};

export default AnimeList;