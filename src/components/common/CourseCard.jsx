import React from "react";

const CourseCard = ({ course }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      if (starValue <= Math.floor(rating)) {
        return (
          <span key={index} className="star full">
            ★
          </span>
        );
      } else if (starValue === Math.ceil(rating) && rating % 1 !== 0) {
        return (
          <span key={index} className="star half">
            ★
          </span>
        );
      } else {
        return (
          <span key={index} className="star empty">
            ☆
          </span>
        );
      }
    });
  };

  return (
    <div className="course-card">
      <div className="thumbnail-container">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="thumbnail"
          loading="lazy"
        />
      </div>
      <div className="course-info">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
      </div>
      <div className="course-instructor">
        <div className="instructor-avatar">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            loading="lazy"
          />
        </div>
        <div className="instructor-info">
          <span className="instructor-name">{course.instructor.name}</span>
          <span className="instructor-profession">
            {course.instructor.profession}
          </span>
        </div>
      </div>
      <div className="course-meta">
        <div className="course-rating">
          <div className="stars">{renderStars(course.rating)}</div>
          <span className="rating-text">
            {course.rating} ({course.reviewCount})
          </span>
        </div>
        <div className="course-price">
          <span className="price">{course.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
