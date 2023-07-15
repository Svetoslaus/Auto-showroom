"use client"
import { ShowMoreCars } from "@/types"
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation"

import CustomButton from "./CustomButton";

const ShowMoreCars = ({pageNumber, isNext, setLimit}: ShowMoreCars) => {
  const router = useRouter();
  const handleNavigation = () => {
  const newLimit = (pageNumber + 1) * 10;
  const newPathName = updateSearchParams("limit", `${newLimit}`);
  router.push(newPathName);
    //setLimit(newLimit);
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton
              title="Show More"
              btnType="button"
              containerStyles="bg-primary-blue rounded-full text-white"
              handleClick={handleNavigation}
            />
        )}
    </div>
  )
}
export default ShowMoreCars