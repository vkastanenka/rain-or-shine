export interface AnimateExpandProps {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
}
