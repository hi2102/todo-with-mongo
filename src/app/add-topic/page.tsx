'use client';

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!title || !description) {
      return alert('제목과 내용을 작성해 주세요.')
    }

    try {
      const res = await fetch('/api/topics', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description })
      })
      console.log(res)
      if (res.ok) {
        router.refresh();
        router.push('/')
      } else {
        throw new Error('Failed To Create a Topic')
      }
    
    } catch (err) {
      console.log('Erorr => ',err)
    }
  }
  return <div className="max-w-3xl mx-auto px-4 pt-4 mt-4">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input 
        type="text" 
        name="Topic Title"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        className="border border-slate-500 px-8 py-2" placeholder="Topic Title"/>
      <input 
        type="text" 
        name="Topic Description"
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        className="border border-slate-500 px-8 py-2" placeholder="Topic Description" />
      <button type="submit" className="w-fit text-zinc-50 bg-green-600 px-4 py-2 rounded">ADD TOPIC</button>
    </form>
  </div>
}