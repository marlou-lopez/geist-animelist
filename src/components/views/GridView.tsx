import { Card, Grid, Image, Text } from "@geist-ui/react";
import styles from './View.module.css';

export interface IAnimeList {
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