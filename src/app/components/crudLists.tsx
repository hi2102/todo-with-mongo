import Link from "next/link";
import {HiPencilAlt} from 'react-icons/hi'
import DeleteButton from "./deleteButton";
import { Fragment } from "react";

const getTopics = async () => {
  const API_URI = process.env.API_URI
  try {
    const res = await fetch(`${API_URI}/api/topics`, {
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error('Failed To Fetch Topics!')
    }
    return res.json();
  } catch (error) {
    console.log('Erorr Loading Topics =>', error)
  }
}

export default async function CrudLists() {
  const {topics} = await getTopics();
  return <>
    {topics.map((topic: { _id: string; title: string; description: string; __v?: number; }) => (<Fragment key={`${topic.__v}${topic._id}`}>
      <div className="bg-neutral-200 my-4 p-4 flex justify-between items-start">
        <dl>
          <dt className="font-bold text-2xl">{topic.title}</dt>
          <dd>{topic.description}</dd>
        </dl>
        <div className="flex gap-2">
          <DeleteButton id={topic._id} />
          <Link href={`/update-topic/${topic._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </Fragment>))
    }
  </>
  

}