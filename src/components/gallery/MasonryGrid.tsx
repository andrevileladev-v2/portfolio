"use client";

import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from "@/app/resources/content";

interface MediaItem {
  src: string;
  alt: string;
  orientation: string;
  type: 'image' | 'video';
  poster?: string;
}

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 2,
    720: 1,
  };

  // Combinar imagens e vídeos em uma única lista
  const mediaItems: MediaItem[] = [
    ...gallery.images.map(item => ({ ...item, type: 'image' as const })),
    ...(gallery.videos || []).map(item => ({ ...item, type: 'video' as const }))
  ];

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {mediaItems.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          {item.type === 'image' ? (
            <SmartImage
              priority={index < 10}
              sizes="(max-width: 560px) 100vw, 50vw"
              radius="m"
              aspectRatio={item.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
              src={item.src}
              alt={item.alt}
            />
          ) : (
            <video
              controls
              poster={item.poster || undefined}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--static-radius-m)',
                display: 'block',
              }}
            >
              <source src={item.src} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          )}
        </div>
      ))}
    </Masonry>
  );
}
