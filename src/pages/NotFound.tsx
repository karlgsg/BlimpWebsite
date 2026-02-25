import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    const robotsMeta = document.querySelector('meta[name="robots"]');
    const previousRobots = robotsMeta?.getAttribute("content") ?? null;

    document.title = "404 | LiftLabs";
    if (robotsMeta) {
      robotsMeta.setAttribute("content", "noindex, nofollow");
    } else {
      const createdMeta = document.createElement("meta");
      createdMeta.setAttribute("name", "robots");
      createdMeta.setAttribute("content", "noindex, nofollow");
      document.head.appendChild(createdMeta);
    }

    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    return () => {
      document.title = previousTitle;
      const currentRobotsMeta = document.querySelector('meta[name="robots"]');
      if (!currentRobotsMeta) return;
      if (previousRobots) {
        currentRobotsMeta.setAttribute("content", previousRobots);
      } else {
        currentRobotsMeta.remove();
      }
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
