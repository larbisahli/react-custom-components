import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { DropDownContainer } from '../AppComponents'
import { useState } from 'react'

export default function Home() {

  return (
    <div className={styles.container}>
      <DropDownContainer />
      {/* <Container label="Carousel"> </Container>
      <Container label="Explore Carousel">  </Container>
      <Container label="Tabs"> </Container> */}
    </div >
  )
}
