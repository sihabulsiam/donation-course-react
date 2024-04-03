/* eslint-disable react/prop-types */
import AllCourseCard from "./AllCourseCard";

const AllCourse = ({allCourse}) => {

  console.log(allCourse);

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mt-12">
        {
          allCourse?.map(course => <AllCourseCard key={course.id} course={course}></AllCourseCard>)
        }
      </div>
    </div>
  );
};

export default AllCourse;