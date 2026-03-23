export interface AnimateExpandProps {
  key?: string;
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
}
