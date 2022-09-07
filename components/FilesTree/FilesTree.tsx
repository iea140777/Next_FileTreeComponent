import File from './Components/File/File';
import Folder from './Components/Folder/Folder';
import {  FilesTreeData, ItemType, ChildrenTreeData } from './types/types';

import styles from './index.module.scss'

interface FilesTreeProps {
  filesTreeData: FilesTreeData
}
export default function FilesTree({ filesTreeData }: FilesTreeProps) {
  const {name, children} = filesTreeData;

  const renderChildrenTree = (childrenTree: ChildrenTreeData) => {
    return (
      childrenTree.map((item) => {
        if ( item.type === ItemType.FILE) {
          return <File name={item.name} key={item.name}/>
        } else  {
          return (
          <Folder name={item.name} isRouteFolder={false} key={item.name}>
            {item.children ? renderChildrenTree(item.children) : null}
          </Folder>
          )
        }
      })
    )  
  }

  return (
  <div className={styles.container}>
    <Folder name={name} isRouteFolder>
      {children ? renderChildrenTree(children): null}
    </Folder>
  </div>)
}
