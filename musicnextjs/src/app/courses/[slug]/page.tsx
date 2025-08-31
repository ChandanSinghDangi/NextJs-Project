import CourseData from '@/data/music_courses.json';

interface SingleCourseSlug {

  params: {
    slug: string;
  }
}

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
  // image: "/courses/guitar.jpg" 
}

function SingleCourse({params}: SingleCourseSlug) {
    
  const singleCourseData = CourseData?.courses.find((singleCourse: Course) => (singleCourse.slug === params.slug ));

  if(!singleCourseData) {
    return <h1>Course Not Found</h1>
  }

  return (

    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-31 mb-20">

      <img
        src={singleCourseData.image}
        alt={singleCourseData.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{singleCourseData.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{singleCourseData.description}</p>

      <p className="text-gray-600 dark:text-gray-400 mb-2">
        <strong>Instructor:</strong> {singleCourseData.instructor}
      </p>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        <strong>Price:</strong> {singleCourseData.price}
      </p>

      <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Enroll Now
      </button>

    </div>

  )

}

export default SingleCourse


