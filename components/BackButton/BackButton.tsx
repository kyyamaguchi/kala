import { Link } from 'next-view-transitions'

import styles from './BackButton.module.css'

export function BackButton() {
  return (
    <div aria-label="Back to home page">
      <Link href={`/`} id={styles.button}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 3.29289C16.0976 3.68342 16.0976 4.31658 15.7071 4.70711L8.41421 12L15.7071 19.2929C16.0976 19.6834 16.0976 20.3166 15.7071 20.7071C15.3166 21.0976 14.6834 21.0976 14.2929 20.7071L6.29289 12.7071C6.10536 12.5196 6 12.2652 6 12C6 11.7348 6.10536 11.4804 6.29289 11.2929L14.2929 3.29289C14.6834 2.90237 15.3166 2.90237 15.7071 3.29289Z" fill="currentColor" />
        </svg>
      </Link>
    </div>
  )
}
