type ItemName = string

enum ItemType {
  FOLDER = "folder",
  FILE = "file"
}

interface FilesTreeData {
  name: ItemName,
  type: ItemType,
  children?: ChildrenTreeData
}

type ChildrenTreeData = FilesTreeData[]

export type { ItemName, FilesTreeData, ChildrenTreeData }
export { ItemType }