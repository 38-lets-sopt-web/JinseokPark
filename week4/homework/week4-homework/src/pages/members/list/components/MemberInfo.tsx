interface MemberInfo {
  username: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

interface MemberInfoCardProps {
  data: MemberInfo;
  title?: string;
}

const MemberInfoCard = ({ data, title = "상세 정보" }: MemberInfoCardProps) => {
  const fields = [
    { label: "아이디", value: data.username },
    { label: "이름", value: data.name },
    { label: "이메일", value: data.email },
    { label: "나이", value: data.age },
    { label: "파트", value: data.part },
  ];

  return (
    <div className="w-full rounded-xl border border-gray-100 bg-gray-50 p-6">
      <h2 className="mb-3 text-sm font-semibold">{title}</h2>
      <div className="flex flex-col gap-3 text-sm">
        {fields.map((field) => (
          <div key={field.label} className="flex justify-between">
            <span className="text-gray-600">{field.label}</span>
            <span className="font-semibold text-blue-500">{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberInfoCard;
