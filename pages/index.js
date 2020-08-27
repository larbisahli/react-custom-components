import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { DropDownContainer, Container, CustomCarouselContainer } from '../AppComponents'
import { useState } from 'react'

export default function Home() {

  return (
    <div className={styles.container}>
      <DropDownContainer />
      <CustomCarouselContainer />
      <Container label="Explore Carousel"> vv </Container>
      <Container label="Tabs"> ll</Container>
    </div >
  )
}

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card