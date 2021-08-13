import { Card, Grid, Image, Text } from "@geist-ui/react";
import styles from './View.module.css';

interface IAnimeList {
  mal_id: number;
  title: string;
  url: string;
  image_url: string;
  type: string;
  watched_episodes: number;
  total_episodes: number;
  score: number;
}

interface IGridView {
  list: IAnimeList[];
}

const list: IAnimeList[] = [
  {
    mal_id: 1,
    title: 'Tokyo Revengers',
    url: "https://myanimelist.net/anime/42249/Tokyo_Revengers",
    image_url: "https://cdn.myanimelist.net/images/anime/1884/114790.jpg?s=1435542c1130c0cc1942b5397604bf80",
    type: "TV",
    watched_episodes: 0,
    total_episodes: 0,
    score: 8
  },
  {
    mal_id: 2,
    title: 'Tokyo Revengers',
    url: "https://myanimelist.net/anime/42249/Tokyo_Revengers",
    image_url: "https://cdn.myanimelist.net/images/anime/1884/114790.jpg?s=1435542c1130c0cc1942b5397604bf80",
    type: "TV",
    watched_episodes: 0,
    total_episodes: 0,
    score: 8
  },
  {
    mal_id: 3,
    title: 'Tokyo Revengers',
    url: "https://myanimelist.net/anime/42249/Tokyo_Revengers",
    "image_url": "https://cdn.myanimelist.net/images/anime/1775/109514.jpg?s=cba7e1478072b27028c9932426c3c46b",
    type: "TV",
    watched_episodes: 0,
    total_episodes: 0,
    score: 8
  }
]

const GridView: React.FC<IGridView> = ({ list }) => {
  return (
    <Grid.Container gap={2} justify="flex-start" className={styles.gridview}>
      {list.map(({
        mal_id, title, url, image_url, type, watched_episodes, total_episodes, score
      }) => {
        return (
          <Grid xs={24} sm={12} md={8} lg={6} key={mal_id}>
            <Card shadow >
              <Image src={image_url} draggable={false} style={{
                height: '200px',
              }} />
                <Text h4>{title}</Text>
                <Text b>Episodes: </Text>
                <Text span type="secondary">{`${watched_episodes}/${total_episodes}`}</Text>
            </Card>
          </Grid>
        )
      })}
    </Grid.Container>
  )
};

export default GridView;