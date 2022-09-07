import Image from 'next/image'
import { ItemName } from '../../types/types'

import styles from './index.module.scss'

interface FileProps {
  name: ItemName
}

export default function File({ name }: FileProps) {
  return (
    <div className={styles.container}>
      <Image
        src="/images/File.svg"
        alt="Icon"
        width={13}
        height={13}
      />
      <span>{name}</span>
    </div>
  )
}