import React from "react";

export const RatingReview = ({ rating, setRating }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            className="star"
            style={{
              cursor: "pointer",
              color: rating >= star ? "gold" : "gray",
            }}
            onClick={() => {
              setRating(star);
            }}
          >
            <img src="/Shape.png" alt="star rating" />
          </span>
        );
      })}
    </div>
  );
};
