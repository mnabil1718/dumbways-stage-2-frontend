import { Star, StarHalf } from "lucide-react";

export type Rating = {
  rate: number;
  count: number;
};

export function Rating({ rating }: { rating?: Rating }) {
  if (!rating)
    return <span className="text-sm text-muted-foreground">No Rating</span>;
  return (
    <div className="flex items-center gap-0.5">
      <span className="mr-1 text-sm font-medium text-muted-foreground">
        {rating.rate.toFixed(1)}
      </span>

      {[1, 2, 3, 4, 5].map((index) => {
        // Full star
        if (rating.rate >= index) {
          return (
            <Star
              key={index}
              size={16}
              className="fill-orange-400 text-orange-400"
            />
          );
        }

        // Half star
        if (rating.rate >= index - 0.5) {
          return (
            <StarHalf
              key={index}
              size={16}
              className="fill-orange-400 text-orange-400"
            />
          );
        }

        // Empty star
        return <Star key={index} size={16} className="text-gray-300" />;
      })}

      <span className="ml-1 text-sm text-muted-foreground">
        ({rating.count})
      </span>
    </div>
  );
}
