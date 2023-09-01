import Link from 'next/link';

export default function NavBar() {
  return <div className='max-w-3xl mx-auto px-4 pt-4'>
    <nav className="bg-slate-800 flex justify-between items-center px-8 py-4 text-slate-50 rounded">
      <Link href='/' className='text-2xl'>MONGO CRUD</Link>
      <Link href='/add-topic' className="bg-neutral-300 px-4 py-2 rounded">ADD</Link>
    </nav>
  </div>
}