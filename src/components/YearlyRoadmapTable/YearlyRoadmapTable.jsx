import React from 'react';

const YearlyRoadmapTable = ({ roadmapData, lectureData }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <div className="w-full h-px bg-gray-400 my-4"></div>
      <h1 className="text-xl font-bold mb-4">⭐1년치 로드맵⭐</h1>
      <h2 className="text-lg font-semibold mb-4">
        1년 로드맵을 3개월 단위로 안내할게요.
      </h2>
      {roadmapData.monthPlans.map((plan, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-md font-semibold mb-2">📅{plan.month}월</h3>
          <table className="min-w-full table-auto border-collapse mb-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Todos</th>
              </tr>
            </thead>
            <tbody>
              {plan.contents.map((content, idx) => (
                <tr key={idx}>
                  <td className="border px-4 py-2">{content.title}</td>
                  <td className="border px-4 py-2">
                    <ul>
                      {content.todos.map((todo, todoIdx) => (
                        <li key={todoIdx}>{todo}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <h1 className="text-xl font-bold mb-4">⭐추천 강의⭐</h1>
      <h2 className="text-lg font-semibold mb-4">
        위 로드맵에 따라 추천된 강의 목록은 다음과 같아요.
      </h2>
      {lectureData && lectureData.lectures.length > 0 ? (
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">강의</th>
              <th className="border px-4 py-2">파트</th>
              <th className="border px-4 py-2 text-gray-600">링크</th>
            </tr>
          </thead>
          <tbody>
            {lectureData.lectures.map((lecture, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{lecture.name}</td>
                <td className="border px-4 py-2">{lecture.section}</td>
                <td className="border px-4 py-2">
                  <a
                    href={lecture.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {lecture.link}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>{/* 데이터 없음 */}</p>
      )}
    </div>
  );
};

export default YearlyRoadmapTable;
