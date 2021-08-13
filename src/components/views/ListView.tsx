import { Card, Collapse, Grid, Image, Text } from "@geist-ui/react";
import { IAnimeList } from "./GridView";
import styles from './View.module.css'

interface IListView {
  list: IAnimeList[];
};

const ListView: React.FC<IListView> = ({ list }) => {
  return (
    <Grid.Container gap={2} justify="center">
      {list.map(({mal_id, title, image_url, watched_episodes, total_episodes, type, score }) => {
        return (
          <Grid key={mal_id} xs={24}>
            <Collapse shadow title={title} className={styles.listitem}>
              <Grid.Container gap={2} justify="flex-start" >
                <Grid>
                  <img alt={title} src={image_url} className={styles.image} />
                </Grid>
                <Grid>
                  <div>
                    <Text b>Type: </Text>
                    <Text span type="secondary">{type}</Text>
                  </div>
                  <div>
                    <Text b>Episodes: </Text>
                    <Text span type="secondary">{`${watched_episodes}/${total_episodes}`}</Text>
                  </div>
                  <div>
                    <Text b>Score: </Text>
                    <Text span type="secondary">{score}</Text>
                  </div>
                  <div>
                    <Text b>Desciption: </Text>
                    <Text type="secondary">Todo</Text>
                  </div>
                </Grid>
              </Grid.Container>
            </Collapse>
          </Grid>
        )
      })}
    </Grid.Container>
  )
};

export default ListView;