import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  fallbackGradient?: string;
  priority?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  fallbackGradient = 'from-emerald-950 via-neutral-900 to-black',
  priority = false,
  loading,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  // If image was already cached or is priority, don't show loading spinner
  const [isLoading, setIsLoading] = useState(!priority);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 text-center rounded-xl bg-gradient-to-br ${fallbackGradient} border border-emerald-500/20 text-neutral-300 ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3 text-emerald-400">
          <BookOpen className="w-6 h-6" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Combo ENEM</span>
        <span className="text-sm font-medium mt-1 text-neutral-200 line-clamp-2">{fallbackText || alt || 'Material Didático'}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 bg-neutral-100/60 rounded-lg flex items-center justify-center pointer-events-none transition-opacity duration-150">
          <div className="w-5 h-5 rounded-full border-2 border-emerald-500/30 border-t-emerald-500 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt || ''}
        className={`${className} transition-opacity duration-150 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : (loading || 'lazy')}
        decoding="async"
        fetchPriority={priority ? 'high' : 'low'}
        onLoad={(e) => {
          // If already completed in browser cache, instant display
          setIsLoading(false);
        }}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        {...props}
      />
    </div>
  );
};
