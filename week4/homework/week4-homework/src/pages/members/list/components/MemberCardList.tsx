import { useNavigate } from "react-router-dom";

interface Member {
  id: number;
  name: string;
  part: string;
}

interface MemberCardListProps {
  members: Member[];
}

const MemberCardList = ({ members }: MemberCardListProps) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {members.map((member) => (
        <article
          key={member.id}
          onClick={() => navigate(`/mypage/members/${member.id}`)}
          className="flex flex-col items-center gap-2 p-5 rounded-lg border border-gray-200 hover:border-blue-500 cursor-pointer"
        >
          <span className="font-bold">{member.name}</span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600">
            {member.part}
          </span>
        </article>
      ))}
    </div>
  );
};

export default MemberCardList;
