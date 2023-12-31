export const featuresList = [
  {
    title: "Diverse Course Selection",
    description:
      "Explore a wide range of courses in various subjects and skill levels, from beginner to advanced",
    icon: "./courses.svg",
    btnHref: "/courses",
    btnText: "Browse Courses",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from industry experts and highly qualified professionals,gaining insights from their extensive knowledge and practical experience",
    icon: "./expert.svg",
    btnHref: "/",
    btnText: "Meet Our Instructors",
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with course materials through practice questions and discussion, and do not miss a chance to join live webinars for real-time interaction",
    icon: "./elearning.svg",
    btnHref: "/",
    btnText: "Start Learning",
  },
  {
    title: "Community and Support",
    description:
      "Join a supportive online learning community, participate in forums, chat support and connect with peers to enrich your learning journey",
    icon: "./community.svg",
    btnHref: "/",
    btnText: "Join Our Community",
  },
];

export const formTemplate = [
  { type: "email", name: "email", label: "Email address", id: "email" },
  { type: "password", name: "password", label: "Password", id: "password" },
];
export const landingPageLinks = [
  { href: "#home", text: "Home" },
  { href: "#features", text: "Features" },
  { href: "#courses", text: "Popular Courses" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact Us" },
];

export const mainLinks = [
  { href: "/courses", text: "Courses" },
  { href: "/profile", text: "My Profile" },
  { href: "/learning", text: "Learning" },
  { href: "/saved", text: "Saved Courses" },
  { href: "/notifications", text: "Notifications" },
  { href: "/messages", text: "Messages" },
  { href: "/preferences", text: "Preferences" },
  { href: "/settings", text: "Settings" },
  { href: "/help", text: "Help" },
  { href: "/faq", text: "FAQ" },
  { href: "/feedback", text: "Feedback" },
];
export const legalAndPoliciesLink = [
  "Privacy Policy",
  "Terms of Service",
  "Refund Policy",
  "Accessibility Statement",
  "Cookie policy",
  "Terms and Condition",
  "Copyright Information",
];

export const customerSupportLinks = [
  "FAQs",
  "Contact Us",
  "Support",
  "Feedback and Suggestion",
];

export const apiState = {
  IDLE: "idle",
  LOADING: "loading",
  FAILED: "failed",
  SUCCESS: "success",
};
