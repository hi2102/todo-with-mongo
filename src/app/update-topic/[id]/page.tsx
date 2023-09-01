import EditTopicForm from '../../components/editTopicForm'

interface EditTopicProps{
  params: {
    id: string
  }
}

const getTopicById = async (id: string) => {
  const API_URI = process.env.API_URI
  try {
    const res = await fetch(`${API_URI}/api/topics/${id}`, {
      cache:"no-store"
    })
    if (!res.ok) throw new Error('Failed To Fetch Topic!');
    return res.json();
  } catch (err) {
    console.log(err)
  }
}

export default async function EditTopic({ params: { id } }: EditTopicProps) {
  const { topic } = await getTopicById(id)
  const { title, description } = topic;
  return <div className='max-w-3xl mx-auto px-4'>
    <EditTopicForm id={id} title={title} description={description} />
  </div>
}