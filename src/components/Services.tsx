import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { PiStarFourFill } from "react-icons/pi";



// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ServiceCard = ({
  id,
  body,
}: {
  id: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden p-4",
      )}
    >
      <blockquote className="text-sm font-extrabold">{body}</blockquote>
    </figure>
  );
};

export function Services({ items }: {items: Array<{
  id: string;
  body: string;
}>}) {
  return (
      <div className="relative flex w-full flex-col items-center justify-center">
          <Marquee pauseOnHover className="[--duration:20s] p-0 gap-0 bg-background dark:bg-pseudoblack shadow-md dark:shadow-gray-800 border-t border-gray-300 dark:border-gray-800"
            style={{
              transform:
                "translateX(0px) translateY(0px) rotate(-3deg) scale(1.5)",
            }}
          >
            {items.map((items) => (
              <div key={items.id + items.body} className="flex items-center gap-4">
                <ServiceCard {...items} />
                <PiStarFourFill className="text-orange-500" />
              </div>
            ))}
          </Marquee>
      </div>
  );
}
