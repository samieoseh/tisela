import CourseCard from "../shared/CourseCard";

const PopularCourseList = () => {
  return (
    <div
      id="courses"
      className="flex flex-col gap-y-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-4 justify-center"
    >
      <CourseCard
        title="Introduction to React and Next.js"
        label="Intermediate"
        price="$250"
        starsCount={2}
        reviewCounts={4500}
        banner="/mona.jpg"
      />
      <CourseCard
        title="Optimizing Next.js"
        label="Expert"
        price="$450"
        starsCount={5}
        reviewCounts={200}
        banner="/mona.jpg"
      />
      <CourseCard
        title="Vanilla Js"
        label="Beginner"
        price="$150"
        starsCount={5}
        reviewCounts={900}
        banner="/mona.jpg"
      />
      <CourseCard
        title="The Only Marketing Course you would ever need"
        label="Advanced"
        price="$950"
        starsCount={4}
        reviewCounts={1200}
        banner="/mona.jpg"
      />
      <CourseCard
        title="Build 6 Projects with Next.js"
        label="Advanced"
        price="$450"
        starsCount={4}
        reviewCounts={240}
        banner="/mona.jpg"
      />
      <CourseCard
        title="Svelte Toolkit"
        label="Expert"
        price="$1250"
        starsCount={5}
        reviewCounts={1900}
        banner="/mona.jpg"
      />
    </div>
  );
};

export default PopularCourseList;
