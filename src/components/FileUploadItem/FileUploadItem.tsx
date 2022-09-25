import clsx from "clsx";
import { FiUploadCloud } from "react-icons/fi";
import Spinner from "../Spinner/Spinner";
import { theme } from "../../../tailwind.config";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

interface FileInputItemProps {
    progress: number;
    error: boolean;
}

const FileUploadItem = ({
    progress,
    error,
}: FileInputItemProps): React.ReactElement => {
    return (
        <div
            className={clsx(
                {
                    "border-gray-200": !error,
                    "!border-primary-600": progress >= 100,
                    "border-error-300 bg-error-25": error,
                },
                `flex font-display flex-1 border-[1px] rounded-[8px] p-[18px]`
            )}
            style={
                !error && progress < 100
                    ? {
                          backgroundImage: `linear-gradient(to right, ${theme.colors.gray["50"]} ${progress}%, transparent ${progress}%`,
                      }
                    : {}
            }
        >
            <div className={clsx("flex-1 flex space-x-4")}>
                <div className="items-start  flex">
                    <div
                        className={clsx(
                            {
                                "bg-primary-100 text-primary-600 border-primary-50":
                                    !error,
                                "bg-error-100 text-error-600 border-error-50":
                                    error,
                            },
                            " h-8 w-8 flex justify-center items-center rounded-full box-content  border-[4px]"
                        )}
                    >
                        <FiUploadCloud />
                    </div>
                </div>
                <div className={clsx("flex-col")}>
                    <div
                        className={clsx(
                            {
                                "text-gray-700": !error,
                                "text-error-700": error,
                            },
                            "font-medium"
                        )}
                    >
                        Tech Design Requirements.pdf
                    </div>
                    <div
                        className={clsx({
                            "text-gray-500": !error,
                            "text-error-500": error,
                        })}
                    >
                        200 KB - {progress}% Uploaded
                    </div>
                    {error && (
                        <div
                            className={clsx({
                                "text-error-700": error,
                            })}
                        >
                            Try Again
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-start">
                {error && (
                    <div className="text-error-600 text-lg h-[42px] w-[42px] flex items-start justify-center">
                        <AiOutlineDelete />
                    </div>
                )}
                {!error && progress >= 0 && progress < 100 && (
                    <div className="flex items-center">
                        <Spinner />
                    </div>
                )}
                {!error && progress >= 100 && (
                    <div className="text-primary-600 text-lg h-[42px] w-[42px] flex items-start justify-center">
                        <FaCheckCircle />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileUploadItem;
