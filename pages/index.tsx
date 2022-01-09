import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Key } from '@/components/Key';
import { KeysList } from '@/data/keys';

const Home = () => {
  return (
    <div className={styles.container}>
      {
        KeysList.map(keyRow => (
            <div className={styles.row}>
              {keyRow.map(key => <Key letter={ key } />)}
            </div>
          )
        )
      }
    </div>
  )
};

export default Home
