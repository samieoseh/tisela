const { default: Link } = require("next/link");

const CourseCard = ({ title, courseCode, description }) => {
  return (
    <div>
      <h4>
        {title} | {courseCode}
      </h4>
      <p>{description}</p>
      <Link href="/">View Course</Link>
    </div>
  );
};

export default CourseCard;
