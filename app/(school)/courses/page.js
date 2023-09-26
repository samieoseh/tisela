import CourseCard from "@/components/shared/CourseCard";
import { Container } from "@/components/shared/Wrapper";
import { LucideFilter } from "lucide-react";

const CoursePage = () => {
  return (
    <Container className="mt-16">
      <h1 className="text-[1rem] md:text-xl text-center mt-24">
        Browse available courses for all categories
      </h1>
      <div className="flex justify-end">
        <div className="inline-flex my-4 border items-center cursor-pointer border-gray-300 rounded-full px-3 py-1">
          <LucideFilter height={12} width={12} />
          <p className="px-1 text-xs text-gray-500">Filters</p>
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
        <CourseCard
          title="Introduction to Programming"
          banner="/mona.jpg"
          label="Beginner"
          starsCount={4}
          reviewCount={40}
          price={200}
        />

        <CourseCard
          title="Introduction to Programming"
          banner="/mona.jpg"
          label="Expert"
          starsCount={1}
          reviewCount={40}
          price={200}
        />
        <CourseCard
          title="Introduction to Programming"
          banner="/mona.jpg"
          label="Advanced"
          starsCount={5}
          reviewCount={40}
          price={200}
        />
        <CourseCard
          title="Introduction to Programming"
          banner="/mona.jpg"
          label="Intermediate"
          starsCount={3}
          reviewCount={40}
          price={200}
        />
      </div>
    </Container>
  );
};

export default CoursePage;
