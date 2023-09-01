'use client'

import { useRouter } from 'next/navigation';
import { HiOutlineTrash } from 'react-icons/hi';

interface DeleteButtonProps {
  id: string
}

export default function DeleteButton({id}: DeleteButtonProps) {
  const router = useRouter();
  const onDelete = async () => {
    const confirmed = confirm('정말 삭제 하시겠습니까?');
    console.log(1, confirmed, 'inside')
    if (confirmed) {
      console.log(1, confirmed)
      const res = await fetch(`/api/topics/?id=${id}`, {
        method: "DELETE"
      })
      if (res.ok) {
        router.refresh();
      }
    }
  }
  return <button className="text-red-400" onClick={onDelete}>
    <HiOutlineTrash size={24} />
  </button>
}