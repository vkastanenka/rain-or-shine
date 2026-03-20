export interface AnimateExpandProps {
  key?: string;
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
}

export interface AnimateFadeProps {
  key?: string;
  children: React.ReactNode;
  duration?: number;
  className?: string;
}
