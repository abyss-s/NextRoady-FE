// src/components/Chat.js
import React, { useState } from 'react';
import roadmap from '../../apis/roadmap'; // 로드맵 관련 API 모듈

const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!inputValue.trim()) return; // 빈 메시지 무시

    // 사용자 메시지 추가
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, sender: 'user' },
    ]);

    // 입력창 비우기
    setInputValue('');

    try {
      let responseText = '';

      // 1. 직업 이름 입력 받기
      if (messages.length === 0) {
        responseText = '어떤 개발자가 되고 싶은지 알려주세요😇';
      } else {
        const jobName = inputValue.trim();

        // 2. 직업 검증
        const isValidJob = await roadmap.validateJob(jobName);
        if (isValidJob) {
          responseText = `직업 "${jobName}"에 대한 이제 로드맵을 알려드릴게요.`;

          // 3. 전체 로드맵 호출
          const wholeRoadmap = await roadmap.getWholeRoadmap(jobName);
          responseText += `\n\n전체 로드맵: ${JSON.stringify(
            wholeRoadmap,
            null,
            2
          )}`;

          // 4. 1년치 로드맵 및 추천 강의 호출
          const yearlyRoadmap = await roadmap.getYearlyRoadmap(jobName);
          responseText += `\n\n1년치 로드맵: ${JSON.stringify(
            yearlyRoadmap.yearRoadMap,
            null,
            2
          )}`;
          responseText += `\n추천 강의: ${JSON.stringify(
            yearlyRoadmap.lectureSuggestion,
            null,
            2
          )}`;

          // 5. 직업 전망 호출
          const jobOutlook = await roadmap.getJobOutlook(jobName);
          responseText += `\n\n직업 전망💡\n${jobOutlook}`;
        } else {
          responseText = `"${jobName}"은(는) 유효하지 않은 직업입니다. 다시 시도해주세요.`;
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
        { text: 'Error fetching response. Please try again.', sender: 'ai' },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-blue-500 self-end'
                  : 'bg-gray-300 text-black self-start'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-400 rounded-l-lg"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="질문을 입력하세요..."
        />
        <button onClick={handleSend} className="p-2 bg-blue-500 rounded-r-lg">
          전송
        </button>
      </div>
    </div>
  );
};

export default Chat;
