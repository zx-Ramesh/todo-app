// import dynamic from 'next/dynamic';

import Todo from "@/components/Todo";


// const Todo = dynamic(() => import('@/components/Todo'), { ssr: false });

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Todo />
    </div>
  );
}
