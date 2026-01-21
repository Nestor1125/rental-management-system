import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AdminLayout({ children }) {
  const router = useRouter();

  function logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      router.push('/');
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <header style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20 }}>
        <h1 style={{ margin: 0 }}>Admin Dashboard</h1>
        <nav style={{ marginLeft: 20 }}>
          <Link href="/admin"><a style={{ marginRight: 10 }}>Home</a></Link>
          <Link href="/admin/users"><a style={{ marginRight: 10 }}>Users</a></Link>
          <Link href="/admin/properties"><a style={{ marginRight: 10 }}>Properties</a></Link>
          <Link href="/admin/backup"><a style={{ marginRight: 10 }}>Backup</a></Link>
        </nav>
        <div style={{ marginLeft: 'auto' }}>
          <button onClick={logout}>Logout</button>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}