import { cn } from "@/Lib/utils";

type SkeletonType = 'section' | 'grid' | 'form' | 'card';

export default function LoadingSkeleton({ type }: { type: SkeletonType }) {
  const baseClasses = 'animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700';
  
  const skeletonConfig = {
    section: (
      <div className="space-y-8">
        <div className={cn(baseClasses, 'h-8 w-1/3 mb-6')} />
        <div className={cn(baseClasses, 'h-4 w-3/4')} />
        <div className={cn(baseClasses, 'h-4 w-2/3')} />
        <div className={cn(baseClasses, 'h-4 w-4/5')} />
      </div>
    ),
    grid: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className={cn(baseClasses, 'h-48 w-full')} />
            <div className={cn(baseClasses, 'h-6 w-2/3')} />
            <div className={cn(baseClasses, 'h-4 w-full')} />
            <div className={cn(baseClasses, 'h-4 w-4/5')} />
          </div>
        ))}
      </div>
    ),
    form: (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className={cn(baseClasses, 'h-12 w-full')} />
        <div className={cn(baseClasses, 'h-12 w-full')} />
        <div className={cn(baseClasses, 'h-32 w-full')} />
        <div className={cn(baseClasses, 'h-12 w-1/3 ml-auto')} />
      </div>
    ),
    card: (
      <div className="border rounded-lg p-6 space-y-4">
        <div className={cn(baseClasses, 'h-40 w-full')} />
        <div className={cn(baseClasses, 'h-6 w-2/3')} />
        <div className={cn(baseClasses, 'h-4 w-full')} />
      </div>
    )
  };

  return (
    <div 
      role="status" 
      aria-live="polite"
      className="relative overflow-hidden"
    >
      {skeletonConfig[type]}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gray-300/30 to-transparent animate-shimmer dark:via-gray-700/30" />
    </div>
  );
}
