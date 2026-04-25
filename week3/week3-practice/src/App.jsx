// 컴포넌트
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

// 멤버 데이터
import { members } from "./data/member";

// 커스텀 훅
import useSearch from "./hooks/useSearch";

function App() {
  const { search, filteredMembers, handleSearchChange, handleSearchClick } =
    useSearch(members);

  return (
    <>
      <Header />
      <Search
        search={search}
        onSearchChange={handleSearchChange}
        onSearchClick={handleSearchClick}
      />
      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredMembers.map((member) => (
          <Card
            key={member.id}
            name={member.name}
            github={member.github}
            englishName={member.englishName}
          />
        ))}
      </section>
    </>
  );
}

export default App;
