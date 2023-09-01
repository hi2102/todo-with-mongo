'use client';

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface EditTopicFormProps{
  id: string;
  title: string;
  description: string;

}
export default function EditTopicForm({id, title, description}: EditTopicFormProps) {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const router = useRouter();

  async function handleUpdate(e:FormEvent) {
    e.preventDefault();
    
    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({newTitle, newDescription})
      })

      if (!res.ok) throw new Error('Failed To Update!');
      router.refresh();
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }
  return <form className="flex flex-col gap-4 mt-8" onSubmit={handleUpdate}>
    <input 
      onChange={(e)=>setNewTitle(e.target.value)}
      value={newTitle}
      type="text" 
      name="topic-title" 
      className="border border-slate-500 px-8 py-2" 
      placeholder='title' />
    <input 
      onChange={(e)=>setNewDescription(e.target.value)}
      value={newDescription}
      type="text" 
      name="topic-title" 
      className="border border-slate-500 px-8 py-2" 
      placeholder='description' />
  <button type="submit" className="w-fit text-zinc-50 bg-green-600 px-4 py-2 rounded">EDIT TOPIC</button>
</form>
}