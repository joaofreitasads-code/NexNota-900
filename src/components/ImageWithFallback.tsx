import React, { useState, useRef, useEffect } from 'react';
import { BookOpen } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  fallbackGradient?: string;
  priority?: boolean;
}

// Global cache tracking loaded URLs so they render instantly with 0 delay across re-renders
const LOADED_IMAGE_CACHE = new Set<string>();

export const prefetchImage = (url: string) => {
  if (!url || typeof window === 'undefined' || LOADED_IMAGE_CACHE.has(url)) return;
  const img = new Image();
  img.decoding = 'async';
  img.src = url;
  img.onload = () => {
    LOADED_IMAGE_CACHE.add(url);
  };
};

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
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image was previously loaded or is already complete in DOM cache
  const isAlreadyCached = src ? LOADED_IMAGE_CACHE.has(src) : false;
  const [isLoading, setIsLoading] = useState(!isAlreadyCached && !priority);

  useEffect(() => {
    if (!src) return;
    if (imgRef.current && (imgRef.current.complete || LOADED_IMAGE_CACHE.has(src))) {
      LOADED_IMAGE_CACHE.add(src);
      setIsLoading(false);
    }
  }, [src]);

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
      {isLoading && !isAlreadyCached && (
        <div className="absolute inset-0 bg-neutral-100/30 rounded-xl pointer-events-none" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt || ''}
        className={className}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : (loading || 'lazy')}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => {
          if (src) LOADED_IMAGE_CACHE.add(src);
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
