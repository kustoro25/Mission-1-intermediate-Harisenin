import React, { useState } from "react";
import CourseCard from "../common/CourseCard";
import { coursesData, categories } from "../../data/coursesData";

const VideoCollection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses =
    activeCategory === "all"
      ? coursesData
      : coursesData.filter((course) => course.category === activeCategory);

  return (
    <section className="video-collection">
      <div className="section-header">
        <h2 className="section-title">Koleksi Video Pembelajaran Unggulan</h2>
        <p className="section-description">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      <div className="category-menu">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-item ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="course-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="no-courses">
            <p>Tidak ada kursus yang ditemukan untuk kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoCollection;
