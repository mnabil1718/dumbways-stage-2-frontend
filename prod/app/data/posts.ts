export type Post = {
  id: number;
  title: string;
  author: string;
  content: string;
  imageUrl?: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "My First Post",
    author: "Nabil",
    content: "This is my first blog content. please be kind",
    imageUrl: "public/2.jpg",
  },
  {
    id: 2,
    title: "Why I Started Microblogging",
    author: "Dandy.dev",
    content:
      "I wanted a simple place to write thoughts without pressure. No likes, no noise, just words.",
      imageUrl: "public/3.jpg",
  },
  {
    id: 3,
    title: "Learning React the Hard Way",
    author: "Amelia H.",
    content:
      "Hooks, layouts, outlets… nothing made sense at first. But breaking things taught me more than tutorials ever did.",
      imageUrl: "public/1.jpg",
  },
  {
    id: 4,
    title: "Late Night Coding Sessions",
    author: "H. Namrud",
    content:
      "There is something peaceful about writing code at 2 AM. Fewer distractions, more focus, more bugs.",
      imageUrl: "public/2.jpg",
  },
  {
    id: 5,
    title: "Thoughts on Minimal Design",
    author: "Ainun Najib",
    content:
      "Minimalism is not about removing things. It is about removing distractions so the important parts can breathe.",
      imageUrl: "public/3.jpg",
  },
  {
    id: 6,
    title: "Debugging is a Skill",
    author: "Kentaro",
    content:
      "Anyone can write code. Debugging teaches patience, logic, and humility more than success ever will.",
      imageUrl: "public/1.jpg",
  },
  {
    id: 7,
    title: "Why I Like Writing",
    author: "Hizmi Khoir",
    content:
      "Writing helps me slow down my thinking. It turns vague ideas into something concrete and honest.",
      imageUrl: "public/2.jpg",
  },
  {
    id: 8,
    title: "Small Projects Matter",
    author: "Dipsy",
    content:
      "Not every project needs to be big. Small, finished projects teach discipline and give confidence.",
      imageUrl: "public/3.jpg",
  },
];
