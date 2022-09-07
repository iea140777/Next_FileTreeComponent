import Image from 'next/image'
import { useState } from 'react'
import cn from 'classnames'
import { ItemName } from '../../types/types'

import styles from './index.module.scss'

interface FolderProps {
  name: ItemName,
  isRouteFolder: boolean,
  children?: React.ReactNode
}

export default function Folder ({ name, isRouteFolder, children }: FolderProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

  return (
    <div className={styles.container}>
        <div className={styles.folderData}>
          <Image
          src={isRouteFolder ? "/images/DownArrowRoute.svg" : "/images/DownArrow.svg"}
          alt="Icon"
          width={12}
          height={10}
          className={cn(
            styles.icon,
            {[styles.iconExpanded]: !isCollapsed},
          )}
          onClick={()=> setIsCollapsed(!isCollapsed)}
          />        
          <Image
            src={isRouteFolder ? "/images/FolderRoute.svg" :"/images/Folder.svg"}
            alt="Icon"
            width={13}
            height={10}
          />
        <span>{name}</span>
      </div>
      {!children ? null : (
        <div 
        className={cn(
          styles.folderContent,
          {[styles.collapsed]: isCollapsed})}
        >
          {children}
        </div>)
      }
  </div>
  );
}