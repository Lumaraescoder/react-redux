export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  loadingBlocks?: boolean;
  blocks?: Block[];
}

export interface Block {
  data: string;
  index: number;
}