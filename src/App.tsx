import { Page, Grid, Select, Divider, Card } from '@geist-ui/react';
import styles from "./App.module.css";
import React from 'react';
import AnimeListContainer from './pages/anime-list/AnimeListContainer';

function App() {
  return (
    <div>
      <header className={styles.header}>
        <h2>Anilist</h2>
      </header>
      <section className={styles.section}>
        <AnimeListContainer />
      </section>
    </div>
  );
}

export default App;
