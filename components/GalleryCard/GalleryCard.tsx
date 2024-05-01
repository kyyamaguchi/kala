import Link from 'next/link'
import { Route } from 'next'
import Image from 'next/image'

import { Spacer } from '@/components/Spacer'

import styles from './GalleryCard.module.css'

export function GalleryCard(
  {
    title,
    description,
    link,
    cta,
    src,
    alt,
    maxWidth
  }:
  {
    title?: string,
    description?: React.ReactElement,
    link?: Route,
    cta?: string,
    src: string,
    alt?: string,
    maxWidth?: number,
  }
) {
  return (
    <>
      <div
        className={styles["image-card"]}
        style={{ maxWidth: maxWidth || '1400px' }}
      >
        <figure>
          <Image
            unoptimized
            src={src}
            alt={alt || title || ''}
            fill={true}
          />
          { title && <figcaption>{title}</figcaption> }
          { description && <div>{description}</div> }
          {
            link &&
              <>
                <Spacer size={10} />
                <p style={{ color: "black" }}><Link href={link}>{cta}</Link></p>
              </>
            }
        </figure>
      </div>
    </>
  )
}
