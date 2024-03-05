import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Oopsies! Page not found!</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Image src="/static/images/cards/uni.jpg" alt="Page not found" width={200} height={150} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
