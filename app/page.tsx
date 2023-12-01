import Course from '@/Components/Course'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen block p-5 m-5">
      <h1 className="text-5xl text-center">QLS Course Planner</h1>
      <div className="text-center bg-gray-300 border border-gray-900 border-solid border-spacing-9 m-3 rounded-md">
        <label htmlFor="search" className="p-3 m-3">Search for a Course</label>
        <input type="text" id="search" />
        <button type="submit" className="bg-green-300 hover:bg-green-500 p-3 m-5 rounded-lg ">Search</button>
        <label htmlFor="filters">Filters</label>
        <input type="dropdown" id="filters"/>
      </div>

      <Course description="a;ldsfj;asjfl;kajfevqw908nfiaosyfjals;dkfjl;kaelkflkasdlkfkljal;ksdfkadsjfl;ajskld;fjlak;sdfkjasl;kdfjsdkl;fklajdskl;fjadkls;j;kljndfc89qew0tvna80synd 980ef0 ayvz98df y890enc0189c5 890wd7 c890a7x0 f9">Biology</Course>
      <Course description="">Chemistry</Course>
      <Course description="">Physics</Course>
    </div>
  )
}
