import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, PlayCircle } from "lucide-react";

type StatusType = 'planned' | 'in_progress' | 'done';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const statusConfig = {
    planned: {
      label: "Planned",
      icon: Clock,
      variant: "outline" as const,
      className: "text-blue-600 border-blue-200"
    },
    in_progress: {
      label: "In Progress",
      icon: PlayCircle,
      variant: "default" as const,
      className: "bg-yellow-500 hover:bg-yellow-600 text-white"
    },
    done: {
      label: "Done",
      icon: CheckCircle,
      variant: "default" as const,
      className: "bg-green-500 hover:bg-green-600 text-white"
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge variant={config.variant} className={`text-xs ${config.className} ${className}`}>
      <Icon className="w-3 h-3 mr-1" />
      {config.label}
    </Badge>
  );
}
