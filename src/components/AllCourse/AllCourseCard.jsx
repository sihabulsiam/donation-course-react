/* eslint-disable react/prop-types */
const AllCourseCard = ({ course }) => {

  const { course_card_color, course_name, image, name_bg_color, course_title} = course || {};

  console.log(name_bg_color);

  return (
    <div className={`bg-[${course_card_color}]`}>
      <div className=" w-full border-gray-200  rounded-lg shadow ">
        <img className=" rounded-lg w-full h-44" src={image} alt="" />

        <div className="p-4">
            <h5 className={`bg-[${name_bg_color}] text-sm p-1 px-2 rounded-md font-medium w-fit `}>{course_name}</h5>
          <p className="text-lg font-medium">
            {course_title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllCourseCard;
