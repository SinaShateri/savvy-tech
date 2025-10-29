export interface HomeHeadNewItemModalProps {
  opened: boolean;
  close: () => void;
}

export interface UseHomeHeadNewItemModalProps {
  close: HomeHeadNewItemModalProps['close'];
}
