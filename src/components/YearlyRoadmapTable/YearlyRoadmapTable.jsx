import React from 'react';

const YearlyRoadmapTable = ({ roadmapData, lectureData }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <h2 className="text-lg font-bold mb-4">1년치 로드맵</h2>
      {roadmapData.yearRoadMap.monthPlans.map((plan, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-md font-semibold mb-2">{plan.month}월</h3>
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

      <h2 className="text-lg font-bold mb-4">추천 강의</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">강의</th>
            <th className="border px-4 py-2">Section</th>
            <th className="border px-4 py-2">Link</th>
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
    </div>
  );
};

export default YearlyRoadmapTable;
