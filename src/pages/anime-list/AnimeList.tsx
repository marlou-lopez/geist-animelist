import { Loading } from "@geist-ui/react";
import { useQuery } from "react-query";
import GridView from "../../components/views/GridView";
import { getList } from "../../services/anime-list";
import { Status } from "./AnimeListContainer";

interface IAnimeListProps {
  type: Status,
  view?: 'grid' | 'list';
}

const AnimeList: React.FC<IAnimeListProps> = ({ type }) => {
  const { data, isLoading, error } = useQuery(type, getList, {
    refetchOnWindowFocus: false
  });

  if (isLoading) {
    return <Loading />
  }

  return (
    <GridView list={data} />
  )
};

export default AnimeList;