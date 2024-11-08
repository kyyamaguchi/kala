import { type Route } from 'next'
import { imageSize } from 'image-size'
import { Link } from 'next-view-transitions'
import Image, { type ImageProps } from 'next/image'

import styles from './Media.module.css'

export interface MediaProps extends Omit<ImageProps, 'alt'> {
  title?: string
  description?: React.ReactElement | string
  link?: Route
  alt?: string
  video?: boolean
}

export async function Media(
  { title, description, link, alt, video, ...props }:
  MediaProps
) {
  async function processImage(src: string) {
    const dimensions = imageSize(src)
    return dimensions
  }
  let imageData
  if (!video) imageData = await processImage(`public${props.src}`)
  const isGif = props.src.toString().endsWith('.gif')

  const ImageWrapper = (
    <>
      { !video &&
        <Image
          unoptimized={isGif}
          alt={alt || ''}
          placeholder="empty"
          width={imageData?.width}
          height={imageData?.height}
          {...props}
        />
      }
    </>
  )

  const VideoWrapper = (
    <>
      {
        video &&
          <video
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={props.src as string} type="video/mp4" />
          </video>
      }
    </>
  )

  function LinkWrapper({ children }: { children: React.ReactElement }) {
    return <>{link ? <Link href={link}>{children}</Link> : children}</>
  }

  return (
    <>
      <div id={styles["media-container"]}>
        <LinkWrapper>
          <figure>
            {ImageWrapper}
            {VideoWrapper}
            {
              (title || description) &&
                <figcaption>
                  {title && <span id={styles.title}>{title}</span>}
                  {title && description && <br />}
                  {description && <span id={styles.description}>{description}</span>}
                </figcaption>
            }
          </figure>
        </LinkWrapper>
      </div>
    </>
  )
}
