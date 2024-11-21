import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import roadmap from '../../apis/roadmap';
import Graph from '../../components/Graph/Graph';
import YearlyRoadmapTable from '../../components/YearlyRoadmapTable/YearlyRoadmapTable';
import MarkdownRenderer from '../../components/MarkdownRenderer/MarkdownRenderer';

const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [graphData, setGraphData] = useState('');
  const [yearlyRoadmapData, setYearlyRoadmapData] = useState(null);
  const [lectureData, setLectureData] = useState(null);
  const [jobOutlookData, setJobOutlookData] = useState('');
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // 사용자 메시지 추가
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, sender: 'user' },
    ]);

    // 입력창 비우기
    setInputValue('');

    setIsLoading(true); // 로딩 시작

    try {
      let responseText = '';

      // 직업 이름 입력 받기
      if (messages.length === 0) {
        responseText = `안녕하세요. 넥로디 봇 로디에요🤗 \n앞으로 어떤 개발자가 되고 싶은지 알려주세요. \nex. 프론트엔드 개발자, 백엔드 개발자 등`;
      } else {
        const jobName = inputValue.trim();

        // 직업 검증
        const isValidJob = await roadmap.validateJob(jobName);

        if (isValidJob) {
          responseText = `"${jobName}"에 대한 전체 로드맵을 알려드릴게요.\n줌 기능을 활용해 자세히 살펴볼 수 있어요.`;

          // 1. 전체 로드맵 호출
          const wholeRoadmap = await roadmap.getWholeRoadmap(jobName);
          setGraphData(wholeRoadmap);

          // 2. 1년치 로드맵 및 추천 강의 호출
          const yearlyRoadmap = await roadmap.getYearlyRoadmap(jobName);
          setYearlyRoadmapData(yearlyRoadmap.yearRoadMap);
          setLectureData(yearlyRoadmap.lectureSuggestion);

          // 3. 직업 전망 호출
          const jobOutlook = await roadmap.getJobOutlook(jobName);
          setJobOutlookData(jobOutlook);
        } else {
          responseText = `'${jobName}'에 대한 정보가 아직 부족해요😭 다시 시도해주세요.`;
        }
      }

      // AI 응답 추가
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseText, sender: 'ai' },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: '오류가 발생했습니다. 다시 시도해주세요.', sender: 'ai' },
      ]);
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4  mt-16 ">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg text-base whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-secondary text-white '
                    : 'bg-gray-300 text-black'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* 그래프 데이터 */}
          {graphData && <Graph dot={graphData} />}

          {/* 연간 로드맵 데이터 */}
          {yearlyRoadmapData && lectureData && (
            <YearlyRoadmapTable
              roadmapData={yearlyRoadmapData}
              lectureData={lectureData}
            />
          )}

          {/* 3. 직업 전망 */}
          {jobOutlookData && <MarkdownRenderer markdown={jobOutlookData} />}

          {/* 로딩 상태 관리 */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-2 text-gray-500">
                <FaSpinner className="animate-spin" />
                <span>AI가 응답을 생성 중입니다...</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 입력창 */}
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-1 p-3 border border-gray-400 rounded-l-lg text-gray-700"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="입력하세요..."
        />
        <button
          onClick={handleSend}
          className="p-2 bg-button text-white rounded-r-lg"
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default Chat;
