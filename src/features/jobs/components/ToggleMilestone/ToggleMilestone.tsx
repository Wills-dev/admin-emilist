import { Milestone } from "../../types";

interface ToggleaMilestonesProps {
  currentMilestoneId: string;
  milestones: Milestone[];
  setCurrentMilestone: (milestone: Milestone) => void;
}

const ToggleMilestone = ({
  milestones,
  currentMilestoneId,
  setCurrentMilestone,
}: ToggleaMilestonesProps) => {
  return (
    <ul className="flex items-center flex-wrap gap-4   px-10 max-sm:px-5">
      {milestones?.map((milestoneInfo: Milestone, i: number) => (
        <li
          key={i}
          className={`${
            milestoneInfo._id === currentMilestoneId
              ? "text-green-500 border-b-2 border-b-green-500"
              : "text-[#737774]"
          }   font-semibold capitalize cursor-pointer max-sm:text-sm`}
          onClick={() => setCurrentMilestone(milestoneInfo)}
        >
          Milestone {i + 1}
        </li>
      ))}
    </ul>
  );
};

export default ToggleMilestone;
