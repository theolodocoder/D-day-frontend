import { MdAddCircle } from "react-icons/md";
import Button from "../../components/Button";
import Upload from "../../components/Upload";
import Clock from "../../components/Clock";

const Dashboard = () => {
  return (
    <div className="flex gap-x-[20%] w-full">
      <div className="w-[30%] flex flex-col gap-y-20">
        <div className="flex gap-x-5 items-center">
          <div>
            <h1 className="text-5xl font-semibold mb-2">Good Morning,</h1>
            <p className="font-extralight">
              Idris, Hope you’re having a great day
            </p>
          </div>
          <img src="/tree.svg" alt="tree-svg" width={130} />
        </div>
        {/* Upload component */}
        <div>
          <Upload />
        </div>
        {/* Button component */}
        <Button content={"Add Event"} icon={MdAddCircle} other="bg-white" />
      </div>
      <div className="w-[50%]">
        <Clock />
      </div>
    </div>
  );
};

export default Dashboard;
