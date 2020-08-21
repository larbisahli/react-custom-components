import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { DropDown } from '../CustomComponents'
import { Container } from '../AppComponents'

export default function Home() {
  return (
    <div className={styles.container}>
      <Container label="DropDown"> <DropDown /></Container>
      <Container label="Carousel"> <DropDown /></Container>
      <Container label="Explore Carousel"> <DropDown /></Container>
      <Container label="Tabs"> <DropDown /></Container>
    </div>
  )
}
