import { Container, Heading } from '../../components'

import styles from './styles.module.sass'

export function AboutScreen() {
  return (
    <Container>
      <Heading>About! 😎</Heading>

      <h2 className={styles.subtitle}>
        We are in initialphase of ocr-stcrane! ✨
      </h2>
    </Container>
  )
}
