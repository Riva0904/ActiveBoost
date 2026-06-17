import { CheckCircle, XCircle, Clock, MinusCircle, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// Pairs color with an icon + text label so status is never communicated by color alone.
const STATUS_CONFIG: Record<string, { label: string; icon: LucideIcon; className: string }> = {
  ACTIVE:    { label: 'Active',    icon: CheckCircle,  className: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  COMPLETED: { label: 'Completed', icon: CheckCircle,  className: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  EXPIRED:   { label: 'Expired',   icon: XCircle,      className: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  FAILED:    { label: 'Failed',    icon: XCircle,      className: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  PENDING:   { label: 'Pending',   icon: Clock,        className: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
  CANCELLED: { label: 'Cancelled', icon: MinusCircle,  className: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400' },
};

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.PENDING;
  const Icon = config.icon;
  return (
    <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold', config.className, className)}>
      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
      {config.label}
    </span>
  );
}
