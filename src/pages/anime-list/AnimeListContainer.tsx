import { Button, ButtonGroup, Grid, Select } from "@geist-ui/react";
import { useState } from "react";
import styles from './AnimeList.module.css'
import AnimeList from "./AnimeList";

export type Status = 'watching' | 'completed' | 'onhold' | 'plantowatch';
export type ViewType = 'grid' | 'list';

const AnimeListContainer = () => {
  const [status, setStatus] = useState<Status>('watching');
  const [viewType, setViewType] = useState<ViewType>('grid'); 

  const handleStatusChange = (value: unknown) => {
    setStatus(value as Status);
  }

  const handleViewChange = (view: ViewType) => {
    setViewType(view);
  }

  console.log(viewType === 'grid')
  return (
    <Grid.Container gap={2} direction="column" alignItems="center" >
      <Grid>
        <Select value={status} placeholder="Select Status" onChange={(e) => handleStatusChange(e)}>
          <Select.Option value="watching">Watching</Select.Option>
          <Select.Option value="completed">Completed</Select.Option>
          <Select.Option value="plantowatch">Plan to watch</Select.Option>
          <Select.Option value="onhold">On Hold</Select.Option>
        </Select>
        <ButtonGroup size="small" >
          <Button disabled={viewType === 'grid'} onClick={() => handleViewChange('grid')}>
            Grid
          </Button>
          <Button disabled={viewType === 'list'}  onClick={() => handleViewChange('list')}>
            List
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid className={styles.container}>
        <AnimeList type={status} view={viewType}/>
      </Grid>
    </Grid.Container>
  )
}

export default AnimeListContainer;