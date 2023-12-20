import { Progress } from "flowbite-react";

const ProgressBar = ({ progress }: { progress: number }) => {
  return <Progress progress={progress} className="mt-3 bg-gray-400" />;
};

export default ProgressBar;
