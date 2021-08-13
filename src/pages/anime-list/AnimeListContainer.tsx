import { Grid, Select } from "@geist-ui/react";
import { useState } from "react";
import styles from './AnimeList.module.css'
import AnimeList from "./AnimeList";

export type Status = 'watching' | 'completed' | 'onhold' | 'plantowatch';

const AnimeListContainer = () => {
  const [status, setStatus] = useState<Status>('watching');

  const handleStatusChange = (value: unknown) => {
    setStatus(value as Status);
  }

  return (
    <Grid.Container gap={2} direction="column" alignItems="center" >
      <Grid>
        <Select value={status} placeholder="Select Status" onChange={(e) => handleStatusChange(e)}>
          <Select.Option value="watching">Watching</Select.Option>
          <Select.Option value="completed">Completed</Select.Option>
          <Select.Option value="plantowatch">Plan to watch</Select.Option>
          <Select.Option value="onhold">On Hold</Select.Option>
        </Select>
      </Grid>
      <Grid className={styles.container}>
        <AnimeList type={status} />
      </Grid>
    </Grid.Container>
  )
}

export default AnimeListContainer;