import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getLesson } from "@/lib/lessons";
import { MarkdownRenderer } from "@/components/markdown-renderer";

interface LessonPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const lesson = await getLesson(params.id);

  if (!lesson) {
    return {
      title: "Lesson not found",
    };
  }

  return {
    title: lesson.title,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const lesson = await getLesson(params.id);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-lg text-gray-600 mb-8 dark:text-gray-300">
        {lesson.description}
      </p>
      <div className="prose max-w-none dark:prose-invert">
        <MarkdownRenderer markdown={lesson.content} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">How it's Calculated</h2>
        <p className="mb-4">
          Understanding the methodology behind our calculations is key to trusting
          your financial projections. We break down the formulas and assumptions
          used in ExitCalc to give you full transparency.
        </p>
        <p>
          Our calculations are based on established financial principles and
          industry best practices. For a detailed explanation of the specific
          formulas, variables, and assumptions used in each calculator, please
          refer to the individual documentation provided within each tool or
          consult our comprehensive guide on financial modeling.
        </p>
      </div>
    </div>
  );
}
