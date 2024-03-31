import Link from 'next/link';
import Image from 'next/image';
import AsciiMeme from '@/components/AsciiMeme';
import { Typography } from '@mui/material';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Typography variant='h2'>Oopsies! Page not found!</Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Image src="/images/cards/BaldConfused.jpg" alt="Page not found" width={300} height={168} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link href="/"><Typography variant='h2'>Go back to Home</Typography></Link>
      </div>
      <div style={{ marginTop: '20px' }}>
        <AsciiMeme/>
      </div>

    </div>
  );
}
